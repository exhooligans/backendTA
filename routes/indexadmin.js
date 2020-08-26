var express = require('express')
var router = express.Router()
const auth = require('../auth/admin_auth')

router.get('/', auth.isLogin, function (req, res, next) {
    res.redirect("/admin")
})

/* GET home page. */
router.get('/admin', auth.isLogin, function (req, res, next) {
    const userLogin = req.session.admin

    res.render('Admin/dashboard', {
        title: "Dashboard ADMIN",
        admin: userLogin
    })
})
module.exports = router