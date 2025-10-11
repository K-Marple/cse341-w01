// Needed Resources
const database = require("../database/connection");
const contactId = require("mongodb").ObjectId;

const apiKey = "3vedp5tkbalwi428xcfz6oquj0m97srg";

const allContacts = async (req, res) => {
  const db = database.getDB();
  const db_response = await db.collection("contacts").find().toArray();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(db_response);
};

const singleContact = async (req, res) => {
  const id = req.params.id;
  const db = database.getDB();
  const db_response = await db
    .collection("contacts")
    .findOne({ _id: new contactId(id) });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(db_response);
};

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const db = database.getDB();
  const db_response = await db
    .collection("contacts")
    .insertOne({ _id: new contactId(), contact });
  console.log(db_response);
  res.setHeader("Content-Type", "application/json");
  res.status(201).json(db_response);
};

const updateContact = async (req, res) => {
  const id = req.params.id;
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const db = database.getDB();
  const db_response = await db
    .collection("contacts")
    .replaceOne({ _id: new contactId(id) }, contact);
  console.log(contact);
  res.setHeader("Content-Type", "application/json");
  res.status(204).json(db_response);
};

const deleteContact = async (req, res) => {
  const id = req.params.id;
  const db = database.getDB();
  const db_response = await db
    .collection("contacts")
    .deleteOne({ _id: new contactId(id) });
  console.log(db_response);
  if (db_response.deletedCount === 1) {
    res.status(200).send();
  }
};

module.exports = {
  allContacts,
  singleContact,
  createContact,
  updateContact,
  deleteContact,
};
