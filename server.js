import express from "express";
import mongoose from "mongoose";
import Card from "./tinderCard.js";
import Cors from "cors";

const app=express();

const port=process.env.PORT || 8001;
const database_url="mongodb+srv://admin-pawan:admin@123@cluster0.nrmol.mongodb.net/<tinderdb>?retryWrites=true&w=majority";

app.use(express.json());
app.use(Cors());

mongoose.connect(database_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});


app.get("/",function(req,res){
    res.send("hello");
})

app.post("/tindercard",function(req,res){
    const cardb=req.body;
    Card.create(cardb,function(err,data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    })
   
})

app.get("/tindercard",function(req,res){
    Card.find(function(err,data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    })

})


app.listen(port,function(){
    console.log("server is running");
})