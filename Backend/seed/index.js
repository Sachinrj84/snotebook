const express=require('express');
const path=require('path');
const mongoose = require('mongoose');
const dataVisual=require('../models/Visual')
const data=require('./data');



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
// const app=express();

const seedDb=async()=>{
    await dataVisual.deleteMany({});
    for(let i=0;i<data.length;i++){
        const nsac=new dataVisual({
            Title:`${data[i].title}`,
            Intensity:`${data[i].intensity}`,
            Sector:`${data[i].sector}`,
            Likelihood:`${data[i].likelihood}`,
            Relevance:`${data[i].relevance}`,
            Year:`${data[i].end_year}`,
            Country:`${data[i].country}`,
            Topics:`${data[i].topic}`,
            Region:`${data[i].region}`,
            Url:`${data[i].url}`
        })
        await nsac.save();
    }
}
seedDb();
