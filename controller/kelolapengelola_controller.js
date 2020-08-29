const { Pengelola_wisata } = require("../models")
const Op = require("sequelize").Op

exports.viewPengelola_wisata = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.admin
    if (userLogin) {
      const pengelola_wisata = await Pengelola_wisata.findAll()
      res.render("admin/kelolapengelola/view_pengelola", {

        title: "Data Pengelola_wisata",
        admin: userLogin,
        pengelola_wisata: pengelola_wisata,
        alert: alert

      })
    } else {
      req.session.destroy()
      res.redirect('/signinadmin')
    }
  } catch (err) {
    throw err
  }
}

exports.viewPengelola_wisata1 = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.admin
    const { id_pengelola } = req.params
    if (userLogin) {
      const pengelola_wisata = await Pengelola_wisata.findOne({
        where: {
          id_pengelola: { [Op.eq]: id_pengelola }
        }
      })
      res.render("admin/kelolapengelola/edit_pengelola", {

        title: "Data Pengelola_wisata",
        admin: userLogin,
        pengelola_wisata: pengelola_wisata,
        alert: alert

      })
    } else {
      req.session.destroy()
      res.redirect('/signinadmin')
    }
  } catch (err) {
    throw err
  }
}

exports.Pengelola_wisataCreate = async (req, res) => {
  const {
    NamaPengelola,
    email,
    password
  } = req.body

  try {
    Pengelola_wisata.create({
      NamaPengelola,
      email,
      password
    }).then(() => {
      req.flash('alertMessage', `Berhasil tambah data  : ${NamaPengelola}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/pengelola_wisata")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/pengelola_wisata")
    })

  } catch (error) {
    console.log(error)
  }
}


exports.Pengelola_wisataUpdate = async (req, res) => {
  const { id_pengelola, NamaPengelola,
    email,
    password } = req.body
  try {
    const pengelola_wisata = await Pengelola_wisata.findOne({
      where: {
        id_pengelola: { [Op.eq]: id_pengelola }
      }
    })
    return pengelola_wisata.update({
      NamaPengelola: NamaPengelola,
      email: email,
      password: password
    }).then(() => {
      req.flash('alertMessage', `Berhasil Ubah data : ${NamaPengelola}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/pengelola_wisata")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/pengelola_wisata")
    })
  }
  catch (error) {
    console.log(error)
  }
}

exports.Pengelola_wisataDelete = (req, res) => {
  const { id_pengelola } = req.params
  Pengelola_wisata.findOne({
    where: {
      id_pengelola: { [Op.eq]: id_pengelola }
    }
  }).then(pengelola_wisata => {
    return pengelola_wisata.destroy().then(() => {
      req.flash('alertMessage', `Berhasi hapus data : ${pengelola_wisata.NamaPengelola}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/pengelola_wisata")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/pengelola_wisata/delete")
    });
}
