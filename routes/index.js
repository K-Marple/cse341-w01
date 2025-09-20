// Needed Resources
const express = require("express");
const router = express.Router();
const controller = require("../controllers/indexController");

// Route to build name
router.get("/", controller.getName);

module.exports = router;
