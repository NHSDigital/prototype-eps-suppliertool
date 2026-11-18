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
    { daysAgo: 0, serviceNowNumber: "SCTASK0311480", oldPharmacyCode: "FM311", oldPharmacyName: "Fulham pharmacy", newPharmacyCode: "FLA83", newPharmacyName: "Superdrug (Fulham)", action: "None" },
    { daysAgo: 1, serviceNowNumber: "SCTASK0311479", oldPharmacyCode: "C9B9L", oldPharmacyName: "Tadworth pharmacy", newPharmacyCode: "FED84", newPharmacyName: "Boots (Tadworth)", action: "None" },
    { daysAgo: 1, serviceNowNumber: "SCTASK0321478", oldPharmacyCode: "FD616", oldPharmacyName: "Ewell pharmacy", newPharmacyCode: "FX197", newPharmacyName: "Pearl chemist (Ewell)", action: "None" },
    { daysAgo: 2, serviceNowNumber: "SCTASK0312477", oldPharmacyCode: "FK893", oldPharmacyName: "Walton pharmacy", newPharmacyCode: "FLA83", newPharmacyName: "Superdrug (Walton)", action: "None" },
    { daysAgo: 2, serviceNowNumber: "SCTASK0301476", oldPharmacyCode: "A7F5G", oldPharmacyName: "Raccoon city pharmacy", newPharmacyCode: "A1T4Y", newPharmacyName: "Boots pharmacy (Raccoon city)", action: "None" },
    { daysAgo: 3, serviceNowNumber: "SCTASK0315475", oldPharmacyCode: "A9M8O", oldPharmacyName: "Vauxhall pharmacy", newPharmacyCode: "AAA02", newPharmacyName: "Superdrug (Vauxhall)", action: "None" },
    { daysAgo: 4, serviceNowNumber: "SCTASK0311474", oldPharmacyCode: "5D74O", oldPharmacyName: "Raynes park pharmacy", newPharmacyCode: "5EM39", newPharmacyName: "Boots (Raynes park)", action: "None" },
    { daysAgo: 4, serviceNowNumber: "SCTASK0311473", oldPharmacyCode: "FC394", oldPharmacyName: "Epsom pharmacy", newPharmacyCode: "FF341", newPharmacyName: "Superdrug (Epsom)", action: "None" },
    { daysAgo: 5, serviceNowNumber: "SCTASK0311172", oldPharmacyCode: "FAR29", oldPharmacyName: "New Malden pharmacy", newPharmacyCode: "FAR24", newPharmacyName: "Boots (New Malden)", action: "None" },
    { daysAgo: 5, serviceNowNumber: "SCTASK0311271", oldPharmacyCode: "FDJ79", oldPharmacyName: "Worcester park pharmacy", newPharmacyCode: "FGX83", newPharmacyName: "Superdrug (Worcester park)", action: "None" },
    { daysAgo: 6, serviceNowNumber: "SCTASK0311370", oldPharmacyCode: "A7Z7B", oldPharmacyName: "Stoneleigh pharmacy", newPharmacyCode: "FFR07", newPharmacyName: "Boots (Stoneleigh)", action: "None" },
    { daysAgo: 6, serviceNowNumber: "SCTASK0311469", oldPharmacyCode: "FGF23", oldPharmacyName: "Dorking pharmacy", newPharmacyCode: "FAW56", newPharmacyName: "Superdrug (Dorking)", action: "None" },
    { daysAgo: 7, serviceNowNumber: "SCTASK0311468", oldPharmacyCode: "FM311", oldPharmacyName: "Cheam pharmacy", newPharmacyCode: "FFV30", newPharmacyName: "Pearl chemist (Cheam)", action: "None" },
    { daysAgo: 7, serviceNowNumber: "SCTASK0311467", oldPharmacyCode: "A7Q5R", oldPharmacyName: "Sutton pharmacy", newPharmacyCode: "FFR07", newPharmacyName: "Boots (Sutton)", action: "None" }
  ],
  removals: [
    { daysAgo: 3, serviceNowNumber: "SCTASK0311466", pharmacyCode: "FDJ79", pharmacyName: "Worcester park pharmacy", nhsNumbersRemoved: "300", action: "None" },
    { daysAgo: 7, serviceNowNumber: "SCTASK0311465", pharmacyCode: "FDJ84", pharmacyName: "Waddon pharmacy", nhsNumbersRemoved: "500", action: "None" },
    { daysAgo: 20, serviceNowNumber: "SCTASK0311444", pharmacyCode: "FDN73", pharmacyName: "Kingston pharmacy", nhsNumbersRemoved: "1000", action: "None" },
    { daysAgo: 40, serviceNowNumber: "SCTASK0311423", pharmacyCode: "FDP61", pharmacyName: "Highgate pharmacy", nhsNumbersRemoved: "280", action: "None" },
    { daysAgo: 80, serviceNowNumber: "SCTASK0311343", pharmacyCode: "FDX88", pharmacyName: "Camden pharmacy", nhsNumbersRemoved: "1800", action: "None" }
  ],
  processingSubmissions: [
    {
      serviceNowNumber: "SCTASK0311481",
      submissionType: "Transfer",
      oldPharmacyCode: "A9M8O",
      oldPharmacyName: "Wimbledon Pharmacy",
      newPharmacyCode: "AAA02",
      newPharmacyName: "Superdrug Pharmacy (Wimbledon)",
      nhsNumbersToProcess: "7,000",
      nhsNumbersProcessed: "3,000",
      submittedBy: "Ethan Winters",
      action: "None"
    },
    {
      serviceNowNumber: "SCTASK0312422",
      submissionType: "Removal",
      oldPharmacyCode: "A9M8O",
      oldPharmacyName: "Fulham Pharmacy",
      nhsNumbersRemoved: "400",
      nhsNumbersToProcess: "1000",
      submittedBy: "Claire Redfield",
      action: "None"
    },
      {
      serviceNowNumber: "SCTASK0322481",
      submissionType: "Transfer",
      oldPharmacyCode: "B9M81",
      oldPharmacyName: "Croydon Pharmacy",
      newPharmacyCode: "BBA02",
      newPharmacyName: "Superdrug Pharmacy (Croydon)",
      nhsNumbersToProcess: "5,000",
      nhsNumbersProcessed: "4,000",
      submittedBy: "Claire Redfield",
      action: "None"
    }
  ],
  testPrescribers:[
    {
      name: "Dr. John Smith",
      PrescriberOrgODS: 'Midlands partnership NHS Foundation Trust (RRE)',
      PrescriberOrgPhone: "020 1234 5678",
      SDSroleId:"123456",
      SDSjobRoleCode: "555086689106",
      SDSuserID: "0145232312",
      GMCnumber: "6150129",
      ProCode: "01457",
      PrescriberTelephoneNumber: "01457 392387"
    },
    {
      name: "Dr. John Vernicke",
      PrescriberOrgODS: "Mount Massive Hospital (RH12A)",
      PrescriberOrgPhone: "021 1234 5678",
      SDSroleId:"144456",
      SDSjobRoleCode: "666086689106",
      SDSuserID: "0145552312",
      GMCnumber: "6353129",
      ProCode: "21457",
      PrescriberTelephoneNumber: "02256 382387"
    }

  ],
  testPatients: [
    {
      name: "Phylis Futterman",
      NHSNumber: "1234567890",
      gender: "Female",
      dateOfBirth: " 16 Jan 1976",
      address: "123 Main Street, London SE12 4DE",
      telephoneNumber: "07123456789",
      GPPractice: "Dr. John Smith's Practice",
      nominatedPharmacy: "Kingston pharmacy",
      dispenserType: "P1",
      patientInformation: "None"
    },
        {
      name: "Aurora Kress",
      NHSNumber: "1234567891",
      gender: "Female",
      dateOfBirth: " 16 Jan 1996",
      address: "123 Main Street, London SE12 4DE",
      telephoneNumber: "07123456789",
      GPPractice: "Dr. John Smith's Practice",
      nominatedPharmacy: "Kingston pharmacy",
      dispenserType: "P1",
      patientInformation: "None"
    },
        {
      name: "Lilya Bogomolova",
      NHSNumber: "1234567892",
      gender: "Female",
      dateOfBirth: " 16 Jan 2016",
      address: "123 Main Street, London SE12 4DE",
      telephoneNumber: "07123456789",
      GPPractice: "Dr. John Smith's Practice",
      nominatedPharmacy: "Kingston pharmacy",
      dispenserType: "P1",
      patientInformation: "None"
    },
        {
      name: "Franco Barbi",
      NHSNumber: "1234567893",
      gender: "Male",
      dateOfBirth: " 16 Jan 1992",
      address: "123 Main Street, London SE12 4DE",
      telephoneNumber: "07123456789",
      GPPractice: "Dr. John P Smith's Practice",
      nominatedPharmacy: "Kingston pharmacy",
      dispenserType: "P3",
      patientInformation: "None"
    }
  ],
  testPharmacies:[
    {
      name: "Kingston pharmacy",
      pharmacyCode: "FDN73"
    }
  ],
  testMedications:[
    {
      medName: "Mehtotrexate 10mg/0.2ml solution for injection pre-filled syringes",
      controlledDrug: "Yes",
      medQuantity: "Five",
      medUnit:"pre-filled disposable injection",
      medInstructions: "Inject 10mg - 5 times a day - subcutaneous route - for 1 day"
    },
     {
      medName: "Ciclosporin 50mg capsules",
      controlledDrug: "No",
      medQuantity: "Five",
      medUnit:"capsules",
      medInstructions: "Take 50mg - 5 times a day - oral route - for 1 day"
    },
      {
      medName: "Sabutamol 50mg capsules",
      controlledDrug: "No",
      medQuantity: "Twenty one",
      medUnit:"capsules",
      medInstructions: "Take one capsule by mouth once daily"
    },
      {
      medName: "Pravastatin 50mg tablets",
      controlledDrug: "No",
      medQuantity: "Twenty one",
      medUnit:"tablets",
      medInstructions: "Take one tablet by mouth once daily"
    },
      {
      medName: "Med name here",
      controlledDrug: "No",
      medQuantity: "Twenty one",
      medUnit:"tablets",
      medInstructions: "Take one tablet by mouth once daily"
    },
  ]
}