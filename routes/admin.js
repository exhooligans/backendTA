let express = require("express")
let router = express.Router()
const {
    viewSignin,
    actionLogin,
    actionLogout


} = require("../controller/admin_controller")
const auth = require('../auth/admin_auth')


router.get("/signinadmin", viewSignin)
router.post("/signin/action/admin", actionLogin)
router.get("/logoutadmin", actionLogout)


module.exports = router