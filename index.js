require("node:dns").setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const secureMiddleware = require("./middleware/secureMiddleware");
const {registrationController} = require("./controllers/registrationController");

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://mostofa:30mostofaZ%40man@cluster0.ftrvtub.mongodb.net/tudo?appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database connection failed:", error);
  });

// JSON middleware
app.use(express.json());

// Registration route
app.post("/registration", registrationController);



// Server
app.listen(5000, () => {
  console.log("server is running ");
});