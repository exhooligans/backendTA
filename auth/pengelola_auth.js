const isLogin = (req, res, next) => {
    if (req.session.pengelola_wisata == null || req.session.pengelola_wisata == undefined) {
        res.redirect('/signinpengelola')
    } else {
        next()
    }
}

module.exports = {
    isLogin: isLogin
}