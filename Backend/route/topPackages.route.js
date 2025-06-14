const Router = require("express");
const { topPackages, fetchPackages } = require("../controller/TopPackages.controller");
const upload = require("../middleware/multer.middleware");
const router = Router();

router.post("/addPackage" , upload.single('image'), topPackages);
router.get("/top-selling" , fetchPackages);

module.exports = router;