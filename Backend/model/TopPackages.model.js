const { model, Schema } = require("mongoose");

const topPackages = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    image:{
        type:String
    }

},
    {
        timestamps: true
    }
);

module.exports = model("TopPackages" , topPackages);