const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended:true }));

app.use(
    cookieSession({
        name:"login-api",
        secret: "COOKIE_SECRET",
        httpOnly: true
    })
);


app.get("/", (req,res) =>{
    res.json({ message:"Login api created"});
});


const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=> {
    console.log(`Login api running on port : ${PORT}`)
})