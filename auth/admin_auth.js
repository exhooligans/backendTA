const isLogin = (req, res, next) => {
    if (req.session.admin == null || req.session.admin == undefined) {
        res.redirect('/signinadmin')
    } else {
        next()
    }
}

module.exports = {
    isLogin: isLogin
}