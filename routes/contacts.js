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

/**
 * @route GET /contacts
 * @description Get all contacts
 * @security apiKey
 * @returns {object} 200 - Contact array
 * @returns {Error} 401 - Unauthorized
 */
router.get("/", allContacts);

/**
 * @route GET /contacts/:id
 * @description Get one contacts by id
 * @param {string} id.path
 * @security apiKey
 * @returns {object} 200 - Contact
 * @returns {Error} 401 - Unauthorized
 */
router.get("/:id", singleContact);

/**
 * @route POST /contacts
 * @description Create contact
 * @param {object} temple.body
 * @security apiKey
 * @returns {object} 200 - Contact created
 * @returns {Error} 401 - Unauthorized
 */
router.post("/", createContact);

/**
 * @route PUT /contacts/:id
 * @description Update contact by id
 * @param {string} id.path
 * @param {object} temple.body
 * @security apiKey
 * @returns {object} 200 - Contact updated
 * @returns {Error} 401 - Unauthorized
 */
router.put("/:id", updateContact);

/**
 * @route DELETE /contacts/:id
 * @description Delete contact by id
 * @param {string} id.path
 * @security apiKey
 * @returns 200 - Contact deleted
 * @returns {Error} 401 - Unauthorized
 */
router.delete("/:id", deleteContact);

// Export
module.exports = router;
