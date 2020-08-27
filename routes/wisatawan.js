let express = require("express")
let router = express.Router()

const {
    RegisterWisatawan, LoginWisatawan, lihatdataWisatawan, Melihatwisata, Melihatsemuawisata, MenambahFeedback
} = require("../controller/data_wisatawan")

//*const auth = require("../middlewares/auth")*//

router.post("/wisatawan/register", RegisterWisatawan)
router.post("/wisatawan/login", LoginWisatawan)
router.get("/wisatawan/:id", lihatdataWisatawan)
router.get("/seeallwisata/:key", Melihatwisata)
router.get("/seeallwisata/", Melihatsemuawisata)
router.get("/wisatawan/feedback", MenambahFeedback)




module.exports = router


