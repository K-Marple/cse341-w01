/* Required Statements */
const express = require("express");
const app = express();
const route = require("./routes");
const { connectDB } = require("./database/connection");

/* Local Server */
const port = process.env.PORT || 3000;

/* Middleware */
app.use(express.json());

/* Routes */
app.use("/", route);

/* Confirm Operation */
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`app listening on ${port}`);
  });
});
