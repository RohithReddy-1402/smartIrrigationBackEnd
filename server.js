const express = require("express");
const app = express();
const PORT = 3000;
const HOST = "0.0.0.0"; 
const cors=require("cors")
app.use(cors({
    origin: "*", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
  }));
app.use(express.json());
let arr=[];
app.post("/send-data", (req, res) => {
    console.log("Received data:", req.body);
    arr.push(req.body);
    res.json({ message: "Data received successfully" });
});

app.get("/get-command", (req, res) => {
    res.json(arr); 
});

app.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`));
