/* Required Statements */
const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes");
const { connectDB } = require("./database/connection");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

/* Local Server */
const port = process.env.PORT || 3000;

/* Swagger */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* Middleware */
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://cse341-pslh.onrender.com"
        : "http://localhost:3000",
  })
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
