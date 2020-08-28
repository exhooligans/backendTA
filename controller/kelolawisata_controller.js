const { Wisata } = require("../models")
const Op = require("sequelize").Op

exports.viewKelola_wisata = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.pengelola_wisata
    if (userLogin) {
      const wisata = await Wisata.findAll()
      res.render("pengelola_wisata/kelolawisata/view_kelolawisata", {

        title: "Data Wisata",
        pengelola_wisata: userLogin,
        wisata: wisata,
        alert: alert

      })
    } else {
      req.session.destroy()
      res.redirect('/signinpengelola')
    }
  } catch (err) {
    throw err
  }
}

exports.Kelola_wisataCreate = async (req, res) => {
  const {
    NamaWisata,
    FotoWisata,
    AlamatWisata
  } = req.body

  try {

    Wisata.create({
      NamaWisata,
      FotoWisata,
      AlamatWisata
    }).then(() => {
      req.flash('alertMessage', `Berhasil tambah data  : ${NamaWisata}`)
      req.flash('alertStatus', 'success')
      res.redirect("/pengelola/kelola_wisata")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/pengelola/kelola_wisata")
    })

  } catch (error) {
    console.log(error)
  }
}


exports.Kelola_wisataUpdate = async (req, res) => {
  const { id_wisata, NamaWisata,
    FotoWisata, AlamatWisata
  } = req.body
  try {
    const wisata = await Wisata.findOne({
      where: {
        id_wisata: { [Op.eq]: id_wisata }
      }
    })
    return wisata.update({
      NamaWisata: NamaWisata,
      FotoWisata: FotoWisata,
      AlamatWisata: AlamatWisata
    }).then(() => {
      req.flash('alertMessage', `Berhasil Ubah data : ${NamaWisata}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/pengelola/kelola_wisata")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/pengelola/kelola_wisata")
    })
  }
  catch (error) {
    console.log(error)
  }
}

exports.Kelola_wisataDelete = (req, res) => {
  const { id_wisata } = req.params
  Wisata.findOne({
    where: {
      id_wisata: { [Op.eq]: id_wisata }
    }
  }).then(wisata => {
    return wisata.destroy().then(() => {
      req.flash('alertMessage', `Berhasi hapus data : ${wisata.NamaWisata}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/pengelola/kelola_wisata")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/pengelola/kelola_wisata/delete")
    });
}
