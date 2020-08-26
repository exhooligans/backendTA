var express = require('express')
var router = express.Router()
let {
    viewPengelola_wisata,
    Pengelola_wisataCreate,
    Pengelola_wisataUpdate,
    Pengelola_wisataDelete
} = require("../controller/kelolapengelola_controller")

const auth = require('../auth/admin_auth')

router.get("/admin/pengelola_wisata", viewPengelola_wisata)
router.post("/admin/pengelola_wisata/create", Pengelola_wisataCreate)
router.post("/admin/pengelola_wisata/edit", Pengelola_wisataUpdate)
router.get("/admin/pengelola_wisata/delete/:id_pengelola", Pengelola_wisataDelete)



module.exports = router
