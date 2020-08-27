const { Admin } = require("../models")
const Op = require("sequelize").Op

// /* view Signin admin cheking session */
exports.viewSignin = (req, res) => {
  const alertMessage = req.flash('alertMessage')
  const alertStatus = req.flash('alertStatus')
  const alert = { message: alertMessage, status: alertStatus }

  if (req.session.admin == null || req.session.admin == undefined) {
    res.render("login_admin", { action: "false" })
  } else {
    console.log(Admin)
    res.redirect('/admin')
  }
}

// /* method Login admin */
exports.actionLogin = async (req, res) => {

  const { nama_admin, password } = req.body;
  let admin = await Admin.findOne({ where: { nama_admin: { [Op.eq]: nama_admin } } })

  if (admin) {
    const checkPassword = await (password, admin.password)

    if (checkPassword) {
      req.session.admin = {
        id: admin.id,
        nama_admin: admin.nama_admin

      }
      console.log(Admin)
      res.redirect("/admin")
    } else {
      req.flash('alertMessage', 'Mohon Maaf Status Anda Belum Aktif!2')
      req.flash('alertStatus', 'danger')
      res.redirect("/signinadmin")
    }
  } else {
    req.flash('alertMessage', 'Username yang Anda Inputkan Salah!')
    req.flash('alertStatus', 'danger')
    res.render("login_admin", { action: "view" })
  }
}

// /* method logout admin */
exports.actionLogout = async (req, res) => {
  req.session.destroy()
  res.redirect('/signinadmin')
}
