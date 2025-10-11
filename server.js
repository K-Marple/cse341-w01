/* Required Statements */
const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes");
const { connectDB } = require("./database/connection");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const fs = require("fs");

/* Local Server */
const port = process.env.PORT || 3000;

/* Swagger */
app.get("/swagger.json", (req, res) => {
  const file = fs.readFileSync("./swagger.json");
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.parse(file));
});

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(null, { swaggerUrl: "/swagger.json" })
);

/* Middleware */
app.use(
  cors()
  // cors({
  //   origin:
  //     process.env.NODE_ENV === "production"
  //       ? "https://cse341-pslh.onrender.com"
  //       : "http://localhost:3000",
  // })
);
app.use(express.json());

/* Routes */
app.use("/", route);

/* Confirm Operation */
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`app listening on ${port}`);
  });
});
