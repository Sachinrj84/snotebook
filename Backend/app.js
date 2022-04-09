const express=require('express');
const path=require('path');
const mongoose = require('mongoose');
const ejsMate=require('ejs-mate')
const dataVisual=require('./models/Visual')



mongoose.connect('mongodb://localhost:27017/intern',{
    useNewUrlParser:true,
    // // useCreateIndex:true,
    useUnifiedTopology:true
});



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
const app=express();

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('home')
});

app.get('/allData',async(req,res)=>{
    const allData=await dataVisual.find({});
    res.render('allData/index.ejs',{allData});
});

app.get('/allData/:id',async(req,res)=>{
    const allData=await dataVisual.findById(req.params.id);
    res.render('allData/show',{allData});
})

app.listen(3000,()=>{
    console.log("serving on port 3000")
});