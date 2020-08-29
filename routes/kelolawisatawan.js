var express = require('express')
var router = express.Router()
let {
    viewWisatawan,
    WisatawanCreate,
    WisatawanUpdate,
    WisatawanDelete, viewWisatawan1
} = require("../controller/kelola_wisatawan_controller")

const auth = require('../auth/admin_auth')

router.get("/admin/wisatawan", viewWisatawan)
router.get("/admin/wisatawan/edit_modal/:id_wisatawan", viewWisatawan1)
router.post("/admin/wisatawan/create", WisatawanCreate)
router.post("/admin/wisatawan/edit/:id_wisatawan", WisatawanUpdate)
router.get("/admin/wisatawan/delete/:id_wisatawan", WisatawanDelete)



module.exports = router
