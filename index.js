const express = require("express")
const app = express()
const secureMiddleware = require("./middleware/secureMiddleware");
const registrationController = require("./controllers/registrationController")
app.use(express.json())

// app.post("/registration", (req, res)=>{
//    const {username ,email, password}= req.body

//    if(!username){
//     res.send( "username is required")
//    }
//    if(!email){
//     res.send( "email is required")
//    }
//    if(!password){
//     res.send( "password is required")
//    }
// })


// app.post('/login', (req, res)=>{
//        const {email, password}= req.body
//        res.send("")
// })


app.get("/registration",registrationController)

app.listen(5000,()=>{
    console.log("server is running")
})