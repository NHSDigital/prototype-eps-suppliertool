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
      serviceNowNumber: "12345",
      oldPharmacyCode: "ABC123",
      newPharmacyCode: "XYZ789",
      action: "None"
    },
    {
      date: daysAgo(7),
      serviceNowNumber: "12346",
      oldPharmacyCode: "DEF456",
      newPharmacyCode: "UVW321",
      action: "None"
    }
  ],
  removals: [
    {
      date: daysAgo(3),
      serviceNowNumber: "12345",
      pharmacyCode: "ABC123",
      nhsNumbersRemoved: "18",
      action: "None"
    },
      {
      date: daysAgo(2),
      serviceNowNumber: "34567",
      pharmacyCode: "BCD123",
      nhsNumbersRemoved: "18",
      action: "None"
    }
  ]
}
