// External dependencies
const express = require("express");

const router = express.Router();
router.post(
  "/v1/contact-answer",
  function (req, res) {
    var Upload = req.session.data["contact"];
    if (Upload == "primary care") {
      res.redirect("/v1/primary-prescription-summary");
    }

    if (Upload == "phone") {
      res.redirect("/v1/secondary-prescription-summary");
    }
    if (Upload == "text") {
      res.redirect("/v1/testpack-prescription-summary");
    }
  },

  router.post("/v2/contact-answer", function (req, res) {
    var Uploads = req.session.data["contact"];
    if (Uploads == "primary-care") {
      res.redirect("/v2/prescription-summary");
    }

    if (Uploads == "secondary-care") {
      res.redirect("/v2/prescription-summary");
    }
    if (Uploads == "test-pack") {
      res.redirect("/v2/testpack-prescription-summary");
    }
    if (Uploads == "presc-files") {
      res.redirect("/v2/testpack-prescription-summary");
    }
  }),

  router.post("/v3/contact-answer", function (req, res) {
    var Uploads = req.session.data["contact"];
    if (Uploads == "primary-care") {
      res.redirect("/v3/prescription-summary");
    }

    if (Uploads == "secondary-care") {
      res.redirect("/v3/prescription-summary");
    }
    if (Uploads == "test-pack") {
      res.redirect("/v3/pack-prescription-summary");
    }
    if (Uploads == "presc-files") {
      res.redirect("/v3/pack-prescription-summary");
    }
    if (Uploads == "paste-files") {
      res.redirect("/v3/pack-prescription-summary");
    }
  }),

  // Add your routes here - above the module.exports line

  (module.exports = router)
);

//branchinng v2

//
//router.post(
// "/v2/contact-answer",
//function (req, res) {
//var Uploads = req.session.data["contact"];
//if (Uploads == "primary care") {
//    res.redirect("/v2/prescription-summary");
//  }

//   if (Uploads == "phone") {
//  res.redirect("/v2/prescription-summary");
//  }
//  if (Uploads == "text") {
//    res.redirect("/v2/testpack-prescription-summary");
//  }
//},

// Clear session data for admintoolV1 prototype
function clearAdminFormData(req) {
  delete req.session.data.ServiceNowNumber;
  delete req.session.data.NewODSCode;
  delete req.session.data["file-hint"];
}

router.get("/admintoolV1/clear-and-start", (req, res) => {
  clearAdminFormData(req);
  res.redirect("/admintoolV1/start-page");
});

router.get("/admintoolV1/clear-and-processing", (req, res) => {
  clearAdminFormData(req);
  res.redirect("/admintoolV1/processing-page");
});

// Clear session data for admintoolV1a prototype
function clearAdminFormData1a(req) {
  delete req.session.data.ServiceNowNumber;
  delete req.session.data.NewODSCode;
  delete req.session.data.OldODSCode;
  delete req.session.data.ServiceNowNumberRem;
  delete req.session.data.OldODSCodeRem;
  delete req.session.data["file-hint"];
}
router.get("/admintoolV1a/clear-and-start", (req, res) => {
  clearAdminFormData1a(req);
  res.redirect("/admintoolV1a/start-page");
});

router.get("/admintoolV1a/clear-and-processing", (req, res) => {
  clearAdminFormData1a(req);
  res.redirect("/admintoolV1a/processing-page");
});

function formatDateTime(date, timeZone) {
  return {
    date: date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone }),
    time: date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }),
  };
}

router.post("/admintoolV1a/change-answer", function (req, res) {
  const data = req.session.data;
  let start, timeZone;

  if (data["contact"] === "now") {
    start = new Date();
    timeZone = "Europe/London";
  } else {
    const d = data.appointmentDate || {};
    // Built as UTC so the entered values are not shifted by the server's timezone
    start = new Date(Date.UTC(d.year, d.month - 1, d.day, d.hour, d.minute));
    timeZone = "UTC";
  }

  const end = new Date(start.getTime() + 15 * 60 * 1000);

  const s = formatDateTime(start, timeZone);
  const e = formatDateTime(end, timeZone);

  data.transferDate = s.date;
  data.transferTime = s.time;
  data.transferEndDate = e.date;
  data.transferEndTime = e.time;

  const isFuture = start.getTime() > Date.now();
  data.transferType = isFuture ? "scheduled" : "now";

  res.redirect("/admintoolV1a/check-details");
});

// Clear session data for admintoolV2 prototype
function clearAdminFormData2(req) {
  delete req.session.data.ServiceNowNumber;
  delete req.session.data.NewODSCode;
  delete req.session.data.OldODSCode;
  delete req.session.data.ServiceNowNumberRem;
  delete req.session.data.OldODSCodeRem;
  delete req.session.data["file-hint"];
}
router.get("/admintoolV2/clear-and-start", (req, res) => {
  clearAdminFormData2(req);
  res.redirect("/admintoolV2/start-page");
});

router.get("/admintoolV2/clear-and-processing", (req, res) => {
  clearAdminFormData2(req);
  res.redirect("/admintoolV2/processing-page");
});

function formatDateTime(date, timeZone) {
  return {
    date: date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone }),
    time: date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }),
  };
}

router.post("/admintoolV2/change-answer", function (req, res) {
  const data = req.session.data;
  const timeZone = "Europe/London";
  const start = new Date();
  const end = new Date(start.getTime() + 15 * 60 * 1000);

  const s = formatDateTime(start, timeZone);
  const e = formatDateTime(end, timeZone);

  data.transferDate = s.date;
  data.transferTime = s.time;
  data.transferEndDate = e.date;
  data.transferEndTime = e.time;
  data.transferType = "now";

  res.redirect("/admintoolV2/check-details");
});

router.get("/admintoolV2/change-submitted", (req, res, next) => {
  const { recordType, recordIndex } = req.query;
  const lists = { transfer: req.session.data.transfers, removal: req.session.data.removals };
  const list = lists[recordType];

  if (list) {
    const record = list[Number(recordIndex)];
    if (!record) {
      return res.redirect("/admintoolV2/processing-page");
    }
    // Locals last for this request only, so manual journeys never see a stale record
    res.locals.record = record;
    res.locals.recordType = recordType;
  }

  next();
});

// Clear session data for admintoolV3 prototype
function clearAdminFormData2(req) {
  delete req.session.data.ServiceNowNumber;
  delete req.session.data.NewODSCode;
  delete req.session.data.OldODSCode;
  delete req.session.data.ServiceNowNumberRem;
  delete req.session.data.OldODSCodeRem;
  delete req.session.data["file-hint"];
}
router.get("/admintoolV3/clear-and-start", (req, res) => {
  clearAdminFormData2(req);
  res.redirect("/admintoolV3/start-page");
});

router.get("/admintoolV3/clear-and-processing", (req, res) => {
  clearAdminFormData2(req);
  res.redirect("/admintoolV3/processing-page");
});

function formatDateTime(date, timeZone) {
  return {
    date: date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone }),
    time: date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }),
  };
}

function setTransferTimes(data) {
  const timeZone = "Europe/London";
  const start = new Date();
  const end = new Date(start.getTime() + 15 * 60 * 1000);

  const s = formatDateTime(start, timeZone);
  const e = formatDateTime(end, timeZone);

  data.transferDate = s.date;
  data.transferTime = s.time;
  data.transferEndDate = e.date;
  data.transferEndTime = e.time;
  data.transferType = "now";
}

router.post("/admintoolV3/change-answer", function (req, res) {
  setTransferTimes(req.session.data);
  res.redirect("/admintoolV3/check-details");
});

// The removal form submits straight to check-details, so set the times here
router.get("/admintoolV3/check-details", (req, res, next) => {
  if (req.query.nominationAction === "remove") {
    setTransferTimes(req.session.data);
  }
  next();
});

router.get("/admintoolV3/change-submitted", (req, res, next) => {
  const { recordType, recordIndex } = req.query;
  const updated = formatDateTime(new Date(), "Europe/London");
  res.locals.lastUpdated = `${updated.date} at ${updated.time}`;
  const lists = { transfer: req.session.data.transfers, removal: req.session.data.removals, processing: req.session.data.processingSubmissions };
  const list = lists[recordType];

  if (list) {
    const record = list[Number(recordIndex)];
    if (!record) {
      return res.redirect("/admintoolV3/processing-page");
    }

    
    res.locals.record = record;
    
    res.locals.recordType = recordType;
    res.locals.recordIndex = recordIndex;
  }


  next();
});