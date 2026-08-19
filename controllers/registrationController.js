require("node:dns").setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const { registrationController } = require("./controllers/registrationController");

mongoose
  .connect("YOUR_MONGODB_CONNECTION_STRING")
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database connection failed:", error);
  });

app.use(express.json());

app.post("/registration", registrationController);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});