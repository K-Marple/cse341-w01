const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API of contacts and other information by KM",
  },
  host:
    process.env.NODE_ENV === "production"
      ? "cse341-pslh.onrender.com"
      : "localhost:3000",
  schemes: [process.env.NODE_ENV === "production" ? "https" : "http"],
};

const outputFile = "./swagger.json";
const endpointFile = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFile, doc).then(() => {
  console.log("Swagger generated. Run server.");
});
