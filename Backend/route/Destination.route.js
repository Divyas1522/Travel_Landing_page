const Router = require("express");
const { addDestination, fetchAll } = require("../controller/destinationList.controller");
const upload = require("../middleware/multer.middleware");

const router = Router();

router.post("/addDestination", upload.single('image') , addDestination);
router.get("/destinations", fetchAll);

module.exports = router;