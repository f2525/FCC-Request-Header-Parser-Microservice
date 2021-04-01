//git link = https://github.com/f2525/FCC-Request-Header-Parser-Microservice
//heroku link = 

const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

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

//kalau heroku dia pake environment variable untuk PORTnya, jadi harus begini app.listennya
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});