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
