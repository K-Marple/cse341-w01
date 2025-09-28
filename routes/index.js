// Needed Resources
const express = require("express");
const router = express.Router();
const contacts = require("./contacts");

// Route to build name
router.use("/contacts", contacts);

module.exports = router;
