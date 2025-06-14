const PackagesModel = require("../model/TopPackages.model");
const { uploadOnCloudinary } = require("../utils/cloudinary");

exports.topPackages = async (req, res) => {
    try {
        const { title, description, price } = req.body;

        const { path } = req?.file;
        console.log(path)

        let response = await uploadOnCloudinary(path);
        console.log(response)

        const add = new PackagesModel({
            title,
            description,
            price,
            image: response?.url
        });

        const Packages = await add.save();

        res.status(200).json({ success: true, message: "Package created successfully", Packages })
    }

    catch (err) {
        res.status(err.status || 500).json({ success: false, message: err.message })
    }
};

exports.fetchPackages = async (req, res) => {
    try {
        const fetchAll = await PackagesModel.find();
        res.status(200).json({ success: true, message: "All Destinations are fetched successfully", fetchAll })
    }

    catch (err) {
        res.status(err.statusCode || 500).json({ success: false, message: err.message });
    }
}

