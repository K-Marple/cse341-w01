/* Required Statements */
const express = require("express");
const app = express();
const route = require("./routes/index");

/* Local Server */
const port = 3000;
const host = "localhost";

/* Routes */
app.use("/", route);

/* Confirm Operation */
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});
