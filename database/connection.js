// Needed Resources
const dotenv = require("dotenv");
dotenv.config();
const mongo = require("mongodb").MongoClient;

let _db;

const connectDB = async () => {
  if (_db) {
    console.log("Database exists");
    return _db;
  }
  try {
    const client = await mongo.connect(process.env.MONGO_CONNECT);
    _db = client.db("web-services");
    console.log("MongoDB connected");
    return _db;
  } catch (err) {
    console.log("Connection unsuccessful:", err);
    throw err;
  }
};

const getDB = () => {
  return _db;
};

module.exports = { connectDB, getDB };
