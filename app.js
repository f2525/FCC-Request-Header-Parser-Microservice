const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

const clientIp = require("client-ip");

app.use("/static", express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
//tes
app.get("/tes", (req,res)=>{
    res.send(req.headers);
})
//user-agent
//accept-language
app.get("/api/whoami", (req,res)=>{
    res.json({
        "ipaddress":clientIp(req),
        "language":req.headers["accept-language"],
        "software": req.headers["user-agent"],
    });
})

app.listen(3000, ()=>{
    console.log("app is running on port 3000");
})