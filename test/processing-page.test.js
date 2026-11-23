const assert = require("node:assert/strict");
const test = require("node:test");
const nunjucks = require("nunjucks");

const stubLoader = new (nunjucks.Loader.extend({
  getSource(name) {
    const templates = {
      "admintoolMVP/layout.html": "{% block head %}{% endblock %}{% block header %}{% endblock %}{% block pageTitle %}{% endblock %}{% block content %}{% endblock %}",
      "header/macro.njk": "{% macro header(options) %}{% endmacro %}"
    };
    return templates[name] ? { src: templates[name], path: name, noCache: true } : null;
  }
}))();

const env = new nunjucks.Environment([
  stubLoader,
  new nunjucks.FileSystemLoader("app/views")
], { autoescape: true });
env.addFilter("adminSubmissionsByDate", require("../app/filters")().adminSubmissionsByDate);

function render(data) {
  return env.render("admintoolMVP/processing-page.html", { data });
}

function rowFor(html, reference) {
  return html.match(/<tr class="nhsuk-table__row">[\s\S]*?<\/tr>/g)
    .find(row => row.includes(reference));
}

test("shows each submission with its type, status, codes and original record link", () => {
  const html = render({
    processingSubmissions: [
      { date: "10 Oct 2026", time: "09:00", serviceNowNumber: "P1", submissionType: "Transfer", oldPharmacyCode: "OLD1", newPharmacyCode: "NEW1", isNew: true },
      { date: "10 Oct 2026", time: "09:01", serviceNowNumber: "P2", submissionType: "Removal", oldPharmacyCode: "REM1" }
    ],
    transfers: [
      { date: "9 Oct 2026", serviceNowNumber: "T1", oldPharmacyCode: "OLD2", newPharmacyCode: "NEW2", isNew: true }
    ],
    removals: [
      { date: "8 Oct 2026", serviceNowNumber: "R1", pharmacyCode: "REM2" }
    ],
    newTransfers: true
  });

  assert.equal((html.match(/<table\b/g) || []).length, 1);
  for (const [reference, type, status, codes, link] of [
    ["P1", "Transfer", "In progress", ["OLD1", "NEW1"], "recordType=processing&amp;recordIndex=0"],
    ["P2", "Removal", "In progress", ["REM1"], "recordType=processing&amp;recordIndex=1"],
    ["T1", "Transfer", "Completed", ["OLD2", "NEW2"], "recordType=transfer&amp;recordIndex=0"],
    ["R1", "Removal", "Completed", ["REM2"], "recordType=removal&amp;recordIndex=0"]
  ]) {
    const row = rowFor(html, reference);
    assert.ok(row, `Missing ${reference}`);
    for (const value of [type, status, ...codes, link]) assert.ok(row.includes(value), `${reference}: missing ${value}`);
  }
  assert.doesNotMatch(html, />New<\/strong>/);
  assert.doesNotMatch(html, /data-sort|aria-sort|nhsuk-table--sortable|data-module="nhsuk-table"/);
});

test("shows an empty state only when all three lists are empty", () => {
  assert.match(render({ processingSubmissions: [], transfers: [], removals: [] }), />No submissions</);
  assert.doesNotMatch(render({
    processingSubmissions: [],
    transfers: [],
    removals: [{ date: "8 Oct 2026", serviceNowNumber: "R1", pharmacyCode: "REM2" }]
  }), />No submissions</);
});

test("orders records from all lists by date and time without changing their links", () => {
  const html = render({
    processingSubmissions: [
      { date: "1 January 2026", time: "09:00", serviceNowNumber: "P1", submissionType: "Transfer" },
      { date: "10 October 2026", time: "08:00", serviceNowNumber: "P2", submissionType: "Removal" },
      { date: "10 Oct 2026", time: "15:00", serviceNowNumber: "P3", submissionType: "Removal" }
    ],
    transfers: [
      { date: "31 Dec 2025", serviceNowNumber: "T1" },
      { date: "11 Oct 2026", serviceNowNumber: "T2" }
    ],
    removals: [{ date: "2 Sept 2026", serviceNowNumber: "R1" }]
  });

  const rows = html.match(/<tr class="nhsuk-table__row">[\s\S]*?<\/tr>/g).slice(1);
  assert.deepEqual(rows.map(row => row.match(/\b(?:P[123]|T[12]|R1)\b/)[0]), ["T2", "P3", "P2", "R1", "P1", "T1"]);
  assert.match(rowFor(html, "T2"), /recordType=transfer&amp;recordIndex=1/);
  assert.match(rowFor(html, "P3"), /recordType=processing&amp;recordIndex=2/);
});
