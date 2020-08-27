let express = require("express")
let router = express.Router()
const {
    viewSignin,
    actionLogin,
    actionLogout


} = require("../controller/pengelolawisata_controller")
const auth = require('../auth/pengelola_auth')


router.get("/signinpengelola", viewSignin)
router.post("/signin/action/pengelola", actionLogin)
router.get("/logoutpengelola", actionLogout)


module.exports = router