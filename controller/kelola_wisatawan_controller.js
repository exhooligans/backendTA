const { Wisatawan } = require("../models")
const Op = require("sequelize").Op

exports.viewWisatawan = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.admin
    if (userLogin) {
      const wisatawan = await Wisatawan.findAll()
      res.render("admin/kelolawisatawan/view_wisatawan", {

        title: "Data Wisatawan",
        admin: userLogin,
        wisatawan: wisatawan,
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
exports.viewWisatawan1 = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.admin
    const { id_wisatawan } = req.params
    if (userLogin) {
      const wisatawan = await Wisatawan.findOne({
        where: {
          id_wisatawan: { [Op.eq]: id_wisatawan }
        }
      })
      res.render("admin/kelolawisatawan/edit_modal", {

        title: "Data Wisatawan",
        admin: userLogin,
        wisatawan: wisatawan,
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

exports.WisatawanCreate = async (req, res) => {
  const {
    nama,
    notelp,
    email,
    password
  } = req.body

  try {
    Wisatawan.create({
      nama,
      notelp,
      email,
      password
    }).then(() => {
      req.flash('alertMessage', `Berhasil tambah data: ${nama}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/wisatawan")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/wisatawan")
    })

  } catch (error) {
    console.log(error)
  }
}


exports.WisatawanUpdate = async (req, res) => {
  const { id_wisatawan, nama, notelp,
    email,
    password } = req.body
  try {
    const wisatawan = await Wisatawan.findOne({
      where: {
        id_wisatawan: { [Op.eq]: id_wisatawan }
      }
    })
    return wisatawan.update({
      nama: nama,
      notelp: notelp,
      email: email,
      password: password
    }).then(() => {
      req.flash('alertMessage', `Berhasil Ubah data : ${process.env.nama}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/wisatawan")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/wisatawan")
    })
  }
  catch (error) {
    console.log(error)
  }
}


exports.WisatawanDelete = (req, res) => {
  const { id_wisatawan } = req.params
  Wisatawan.findOne({
    where: {
      id_wisatawan: { [Op.eq]: id_wisatawan }
    }
  }).then(wisatawan => {
    return wisatawan.destroy().then(() => {
      req.flash('alertMessage', `Berhasil Hapus data ${wisatawan.nama}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/wisatawan")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/wisatawan/delete")
    });
}

