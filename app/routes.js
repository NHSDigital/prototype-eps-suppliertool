// External dependencies
const express = require("express");

const router = express.Router();
router.post(
  "/v1/contact-answer",
  function (req, res) {
    var Upload = req.session.data["contact"];
    if (Upload == "contact-1") {
      res.redirect("/v1/primary-prescription-summary");
    }

    if (Upload == "contact-2") {
      res.redirect("v1/secondary-prescription-summary");
    }
    if (Upload == "conditional-contact-3") {
      res.redirect("v1/testpack-prescription-summary");
    }
  },

  // Add your routes here - above the module.exports line

  (module.exports = router)
);
