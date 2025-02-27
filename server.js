const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors({
    origin: "*", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));
app.use(express.json());
let arr=[[0,0],[1,0],[2,0],[3,0]]
let motor_status=[false,false,false,false]


app.post("/send-data", (req, res) => {
    let x=req.body;
    
    for(let i=0;i<4;i++){
        arr[i]=x.sensors[i];
    }
    
    res.json({ message: "Data received successfully" });
});


app.get("/get-command", (req, res) => {
    res.json(arr);
});

app.post("/motor-post",(req,res)=>{
    let y=req.body;
    motor_status=y

    
})
app.get("/motor-get",(req,res)=>{
    res.json(motor_status);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
