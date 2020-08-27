var express = require('express')
var router = express.Router()
const auth = require('../auth/pengelola_auth')

router.get('/', auth.isLogin, function (req, res, next) {
    res.redirect("/pengelola")
})

/* GET home page. */
router.get('/pengelola', auth.isLogin, function (req, res, next) {
    const userLogin = req.session.pengelola_wisata

    res.render('Pengelola_wisata/dashboard', {
        title: "Dashboard Pengelola Wisata",
        pengelola_wisata: userLogin
    })
})
module.exports = router