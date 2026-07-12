const express = require("express");
const app = express();
app.use(express.json());



// // Registration
// app.post("/registration", (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username) {
//     return res.send("Username is required");
//   }

//   if (!email) {
//     return res.send("Email is required");
//   }

//   if (!password) {
//     return res.send("Password is required");
//   }

//   return res.send("Registration successful");
// });

// // Login
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   if (!email) {
//     return res.send("Email is required");
//   }

//   if (!password) {
//     return res.send("Password is required");
//   }

//   return res.send("Login successful");
// });

app.get("/bankamount", (req,res)=>{
  console.log("first")
})


app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});