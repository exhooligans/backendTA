var express = require('express')
var router = express.Router()
let {
    viewKelola_feedback,
    Kelola_feedbackDelete

} = require("../controller/kelola_feedback_controller")

const auth = require('../auth/pengelola_auth')

router.get("/pengelola/kelolafeedback", viewKelola_feedback)
router.get("/pengelola/kelolafeedback/delete/:id_feedback", Kelola_feedbackDelete)



module.exports = router
