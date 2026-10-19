// Formats a date as "10th October 2026" to match the existing display format
function formatDate(date) {
  const day = date.getDate()
  const suffix = (day % 10 === 1 && day !== 11) ? 'st'
    : (day % 10 === 2 && day !== 12) ? 'nd'
    : (day % 10 === 3 && day !== 13) ? 'rd'
    : 'th'
  const month = date.toLocaleString('en-GB', { month: 'long' })
  return `${day}${suffix} ${month} ${date.getFullYear()}`
}

function daysAgo(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return formatDate(d)
}

module.exports = {
  transfers: [
    {
      date: daysAgo(0),
      serviceNowNumber: "SE1234567890",
      oldPharmacyCode: "FM311",
      newPharmacyCode: "FLA83",
      action: "None"
    },
    {
      date: daysAgo(1),
      serviceNowNumber: "SE2345678901",
      oldPharmacyCode: "C9B9L",
      newPharmacyCode: "FED84",
      action: "None"
    },
    {
      date: daysAgo(1),
      serviceNowNumber: "SE3456789012",
      oldPharmacyCode: "FD616",
      newPharmacyCode: "FX197",
      action: "None"
    },
      {
      date: daysAgo(2),
      serviceNowNumber: "SE4567890123",
      oldPharmacyCode: "FK893",
      newPharmacyCode: "FLA83",
      action: "None"
    },
      {
      date: daysAgo(2),
      serviceNowNumber: "SE5678901234",
      oldPharmacyCode: "A7F5G",
      newPharmacyCode: "A1T4Y",
      action: "None"
    },
      {
      date: daysAgo(3),
      serviceNowNumber: "SE6789012345",
      oldPharmacyCode: "A9M8O",
      newPharmacyCode: "AAA02",
      action: "None"
    },
      {
      date: daysAgo(4),
      serviceNowNumber: "SE7890123456",
      oldPharmacyCode: "5D74O",
      newPharmacyCode: "5EM39",
      action: "None"
    },
      {
      date: daysAgo(4),
      serviceNowNumber: "SE8901234567",
      oldPharmacyCode: "FC394",
      newPharmacyCode: "FF341",
      action: "None"
    },
      {
      date: daysAgo(5),
      serviceNowNumber: "SE9012345678",
      oldPharmacyCode: "FAR29",
      newPharmacyCode: "FAR24",
      action: "None"
    },
      {
      date: daysAgo(5),
      serviceNowNumber: "SE0123456789",
      oldPharmacyCode: "FDJ79",
      newPharmacyCode: "FGX83",
      action: "None"
    },
      {
      date: daysAgo(6),
      serviceNowNumber: "SE1123456789",
      oldPharmacyCode: "A7Z7B",
      newPharmacyCode: "FFR07",
      action: "None"
    },
      {
      date: daysAgo(6),
      serviceNowNumber: "SE1223456789",
      oldPharmacyCode: "FGF23",
      newPharmacyCode: "FAW56",
      action: "None"
    },
    {
      date: daysAgo(7),
      serviceNowNumber: "SE1323456789",
      oldPharmacyCode: "FM311",
      newPharmacyCode: "FFV30",
      action: "None"
    },
    {
      date: daysAgo(7),
      serviceNowNumber: "SE1423456789",
      oldPharmacyCode: "A7Q5R",
      newPharmacyCode: "FFR07",
      action: "None"
    }
  ],
  removals: [
    {
      date: daysAgo(3),
      serviceNowNumber: "SE1112345",
      pharmacyCode: "FDJ79",
      nhsNumbersRemoved: "300",
      action: "None"
    },
    {
      date: daysAgo(7),
      serviceNowNumber: "SE222345",
      pharmacyCode: "FDJ84",
      nhsNumbersRemoved: "500",
      action: "None"
    },
    {
      date: daysAgo(20),
      serviceNowNumber: "SE3334567",
      pharmacyCode: "FDN73",
      nhsNumbersRemoved: "1000",
      action: "None"
    },
    {
      date: daysAgo(40),
      serviceNowNumber: "SE553423",
      pharmacyCode: "FDP61",
      nhsNumbersRemoved: "280",
      action: "None"
    },
      {
      date: daysAgo(80),
      serviceNowNumber: "SE3456712",
      pharmacyCode: "FDX88",
      nhsNumbersRemoved: "1800",
      action: "None"
    }
  ]
}
