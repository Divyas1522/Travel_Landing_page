const express = require("express");
const { PORT } = require("./config");
const cors = require("cors")
const destinationRoute = require("./route/Destination.route");
const packagesRoute = require("./route/topPackages.route")
const { connectDB } = require("./config/db");

connectDB();
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", destinationRoute);
app.use("/api/packages", packagesRoute)

app.get("/", (req, res) => {
    res.send("API is working!");
});

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log("Server is runnig on PORT ", PORT)
})