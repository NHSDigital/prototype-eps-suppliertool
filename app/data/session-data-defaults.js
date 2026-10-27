// Formats a date as "10 Oct 2026" to match the existing display format
function formatDate(date) {
  const day = date.getDate()
  const month = date.toLocaleString('en-GB', { month: 'short' })
  return `${day} ${month} ${date.getFullYear()}`
}

function daysAgo(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return formatDate(d)
}

// Time as "14:05", offset in minutes from now (UK time)
function timeFromNow(minutes) {
  return new Date(Date.now() + minutes * 60 * 1000).toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London'
  })
}

module.exports = {
  transfers: [
    { daysAgo: 0, serviceNowNumber: "SCTASK0311480", oldPharmacyCode: "FM311", newPharmacyCode: "FLA83", action: "None" },
    { daysAgo: 1, serviceNowNumber: "SCTASK0311479", oldPharmacyCode: "C9B9L", newPharmacyCode: "FED84", action: "None" },
    { daysAgo: 1, serviceNowNumber: "SCTASK0321478", oldPharmacyCode: "FD616", newPharmacyCode: "FX197", action: "None" },
    { daysAgo: 2, serviceNowNumber: "SCTASK0312477", oldPharmacyCode: "FK893", newPharmacyCode: "FLA83", action: "None" },
    { daysAgo: 2, serviceNowNumber: "SCTASK0301476", oldPharmacyCode: "A7F5G", newPharmacyCode: "A1T4Y", action: "None" },
    { daysAgo: 3, serviceNowNumber: "SCTASK0315475", oldPharmacyCode: "A9M8O", newPharmacyCode: "AAA02", action: "None" },
    { daysAgo: 4, serviceNowNumber: "SCTASK0311474", oldPharmacyCode: "5D74O", newPharmacyCode: "5EM39", action: "None" },
    { daysAgo: 4, serviceNowNumber: "SCTASK0311473", oldPharmacyCode: "FC394", newPharmacyCode: "FF341", action: "None" },
    { daysAgo: 5, serviceNowNumber: "SCTASK0311172", oldPharmacyCode: "FAR29", newPharmacyCode: "FAR24", action: "None" },
    { daysAgo: 5, serviceNowNumber: "SCTASK0311271", oldPharmacyCode: "FDJ79", newPharmacyCode: "FGX83", action: "None" },
    { daysAgo: 6, serviceNowNumber: "SCTASK0311370", oldPharmacyCode: "A7Z7B", newPharmacyCode: "FFR07", action: "None" },
    { daysAgo: 6, serviceNowNumber: "SCTASK0311469", oldPharmacyCode: "FGF23", newPharmacyCode: "FAW56", action: "None" },
    { daysAgo: 7, serviceNowNumber: "SCTASK0311468", oldPharmacyCode: "FM311", newPharmacyCode: "FFV30", action: "None" },
    { daysAgo: 7, serviceNowNumber: "SCTASK0311467", oldPharmacyCode: "A7Q5R", newPharmacyCode: "FFR07", action: "None" }
  ],
  removals: [
    { daysAgo: 3, serviceNowNumber: "SCTASK0311466", pharmacyCode: "FDJ79", nhsNumbersRemoved: "300", action: "None" },
    { daysAgo: 7, serviceNowNumber: "SCTASK0311465", pharmacyCode: "FDJ84", nhsNumbersRemoved: "500", action: "None" },
    { daysAgo: 20, serviceNowNumber: "SCTASK0311444", pharmacyCode: "FDN73", nhsNumbersRemoved: "1000", action: "None" },
    { daysAgo: 40, serviceNowNumber: "SCTASK0311423", pharmacyCode: "FDP61", nhsNumbersRemoved: "280", action: "None" },
    { daysAgo: 80, serviceNowNumber: "SCTASK0311343", pharmacyCode: "FDX88", nhsNumbersRemoved: "1800", action: "None" }
  ],
  processingSubmissions: [
    {
      serviceNowNumber: "SCTASK0311481",
      submissionType: "Transfer",
      oldPharmacyCode: "A9M8O",
      newPharmacyCode: "AAA02",
      nhsNumbersToProcess: "7,000",
      nhsNumbersProcessed: "3,000",
      submittedBy: "Ethan Winters",
      action: "None"
    },
    {
      serviceNowNumber: "SCTASK0312422",
      submissionType: "Removal",
      oldPharmacyCode: "A9M8O",
      nhsNumbersRemoved: "400",
      nhsNumbersToProcess: "1000",
      submittedBy: "Claire Redfield",
      action: "None"
    }
  ]
}