const { default: mongoose } = require('mongoose');
const moongose=require('mongoose');
const Schema=moongose.Schema;

const dataSchema=new Schema({
    Title:{
        type:String,
        required:true
    },
    Intensity:{
        type:Number,
        required:true
    },
        Sector:String,
        Likelihood:Number,
        Relevance:Number,
        Year:String,
        Country:String,
        Topics:String,
        Region:String,
        Url:String

})

module.exports=mongoose.model('dataVisual',dataSchema);