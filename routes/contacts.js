// Needed Resources
const express = require("express");
const router = express.Router();
const {
  allContacts,
  singleContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contacts");

// Route to contacts
router.get("/", allContacts);
router.get("/:id", singleContact);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

// Export
module.exports = router;
