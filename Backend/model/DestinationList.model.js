const {model ,Schema } = require("mongoose");
const { type } = require("os");

let destinationList = new Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
       type:String 
    }
})

module.exports = model("Destination" , destinationList)