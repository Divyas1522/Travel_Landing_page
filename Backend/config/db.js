const mongoose = require("mongoose");
const { MONGODB_URL } = require(".");

const connectDB = async() => {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB Server is running")
}
module.exports = {
    connectDB
}