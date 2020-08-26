const { Pengelola_wisata } = require("../models")
const Op = require("sequelize").Op

// /* view Signin admin cheking session */
exports.viewSignin = (req, res) => {
  const alertMessage = req.flash('alertMessage')
  const alertStatus = req.flash('alertStatus')
  const alert = { message: alertMessage, status: alertStatus }

  if (req.session.pengelola_wisata == null || req.session.pengelola_wisata == undefined) {
    res.render("login", { action: "false" })
  } else {
    console.log(Pengelola_wisata)
    res.redirect('/pengelola')
  }
}

// /* method Login admin */
exports.actionLogin = async (req, res) => {

  const { email, password } = req.body;
  let pengelola_wisata = await Pengelola_wisata.findOne({ where: { email: { [Op.eq]: email } } })

  if (pengelola_wisata) {
    const checkPassword = await (password, pengelola_wisata.password)

    if (checkPassword) {
      req.session.pengelola_wisata = {
        id: pengelola_wisata.id,
        email: pengelola_wisata.email

      }
      console.log(Pengelola_wisata)
      res.redirect("/pengelola")
    } else {
      req.flash('alertMessage', 'Mohon Maaf Status Anda Belum Aktif!2')
      req.flash('alertStatus', 'danger')
      res.redirect("/signinpengelola")
    }
  } else {
    req.flash('alertMessage', 'Username yang Anda Inputkan Salah!')
    req.flash('alertStatus', 'danger')
    res.render("login", { action: "view" })
  }
}

// /* method logout admin */
exports.actionLogout = async (req, res) => {
  req.session.destroy()
  res.redirect('/signinpengelola')
}
