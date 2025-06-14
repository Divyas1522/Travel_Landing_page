const DestModel = require("../model/DestinationList.model");
const { uploadOnCloudinary } = require("../utils/cloudinary");

exports.addDestination = async (req, res) => {
    try {
        const { name, price } = req.body;

        const { path } = req?.file;
        console.log(path)

        let response = await uploadOnCloudinary(path);
        console.log(response)

        const add = new DestModel({
            name,
            price,
            image: response?.url
        })

        console.log("req.body:", req.body);
        console.log("req.file:", req.file);
        console.log("Cloudinary Response:", response);
        let destination = await add.save();

        res.status(200).json({ success: true, message: "Destination and Price added sucessfully", destination })

    }

    catch (err) {
        res.status(err.statusCode || 500).json({ success: false, message: err.message });
    }
}

exports.fetchAll = async (req, res) => {
    try {
        const destinations = await DestModel.find();
        res.status(200).json({ success: true, message: "All Destinations are fetched successfully", destinations })
    }

    catch (err) {
        res.status(err.statusCode || 500).json({ success: false, message: err.message });
    }
}