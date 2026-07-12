const secureMiddleware =   (req,res,next)=>{
    let password = "278tye827eu9hf"
    let pss = req.headers.authorization

    if (password === pss) {
        next()
    } else {
        res.send("Invalid password")
    }
}

module.exports = secureMiddleware