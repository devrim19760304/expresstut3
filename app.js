const express=require("express");
const path=require("path");
const fs=require("fs");
const cookieParser=require("cookie-parser");
const PORT=3000;

const app=express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//add to view to project
app.use(express.static(path.join(__dirname,"view")));
//add to public to project
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=> {

    //res.send("Hello from server");
    res.sendFile(path.join(__dirname,"view","index.html"))
})

//post method
app.post("/calculator",(req,res)=> {
    let {number1,number2}=req.body;
    number1=parseFloat(number1);
    number2=parseFloat(number2);

    const result=number1+number2;
    res.json({
        number1:number1,
        number2:number2,
        result:result

    });
})

app.listen(PORT,()=> {
    console.log(`listening port ${PORT}`);
})