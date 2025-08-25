const express= require("express");
const cors= require("cors")
const app= express();

const PORT=3001;



//Middleware

app.use(express.json());

app.use(cors())



//Routes 

app.get("/login",(req, res, next)=>{
        res.json({
            message:"Login Successfully"
        })
})

app.post("/login",(req, res, next)=>{

    console.log(req.body);
        res.json({
            message:"Loin Failed"
        })
})

app.post("/register",(req, res, next)=>{

    console.log(req.body);


        res.json({
            message:"Register successfully"
        })
})


app.listen(PORT,()=>{
    console.log(`Your application is running with the port : ${PORT}`);
})





