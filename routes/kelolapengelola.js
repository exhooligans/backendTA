var express = require('express')
var router = express.Router()
let {
    viewPengelola_wisata,
    Pengelola_wisataCreate,
    Pengelola_wisataUpdate,
    Pengelola_wisataDelete, viewPengelola_wisata1
} = require("../controller/kelolapengelola_controller")

const auth = require('../auth/admin_auth')

router.get("/admin/pengelola_wisata", viewPengelola_wisata)
router.get("/admin/pengelola_wisata/edit_pengelola/:id_pengelola", viewPengelola_wisata1)
router.post("/admin/pengelola_wisata/create", Pengelola_wisataCreate)
router.post("/admin/pengelola_wisata/edit/:id_pengelola", Pengelola_wisataUpdate)
router.get("/admin/pengelola_wisata/delete/:id_pengelola", Pengelola_wisataDelete)



module.exports = router
