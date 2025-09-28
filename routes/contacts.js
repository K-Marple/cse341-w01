// Needed Resources
const express = require("express");
const router = express.Router();
const { allContacts, singleContact } = require("../controllers/contacts");

// Route to contacts
router.get("/", allContacts);
router.get("/:id", singleContact);

// Export
module.exports = router;
