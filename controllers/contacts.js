// Needed Resources
const database = require("../database/connection");
const contactId = require("mongodb").ObjectId;

const allContacts = async (req, res) => {
  const db = database.getDB();
  const contacts = await db.collection("contacts").find().toArray();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(contacts);
};

const singleContact = async (req, res) => {
  const id = req.params.id;
  const db = database.getDB();
  const contact = await db
    .collection("contacts")
    .findOne({ _id: new contactId(id) });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(contact);
};

module.exports = { allContacts, singleContact };
