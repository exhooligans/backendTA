var express = require('express')
var router = express.Router()
let {
    viewWisatawan,
    WisatawanCreate,
    WisatawanUpdate,
    WisatawanDelete
} = require("../controller/kelola_wisatawan_controller")

const auth = require('../auth/admin_auth')

router.get("/admin/wisatawan", viewWisatawan)
router.post("/admin/wisatawan/create", WisatawanCreate)
router.post("/admin/wisatawan/edit", WisatawanUpdate)
router.get("/admin/wisatawan/delete/:id_wisatawan", WisatawanDelete)



module.exports = router
