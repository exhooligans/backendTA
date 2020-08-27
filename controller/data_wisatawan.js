const { Wisatawan, Wisata, Feedback } = require('../models')
const wisata = require('../models/wisata')
const Op = require("sequelize").Op


async function valid_wisatawanasi_register(req) {
  let {
    nama,
    notelp,
    email,
    password,
    retypePassword
  } = req.body

  let errors = []

  if (!nama) {
    errors.push({
      field: 'nama',
      message: 'Nama is Required',
    })
  }

  if (!notelp) {
    errors.push({
      field: 'notelp',
      message: 'Phone Number is Required',
    })
  }

  if (!email) {
    errors.push({
      field: 'email',
      message: 'Email is Required',
    })
  }

  if (!password) {
    errors.push({
      field: 'password',
      message: 'Password is Required',
    })
  }

  if (!retypePassword) {
    errors.push({
      field: 'retypePassword',
      message: 'Password Confirmation is Required',
    })
  }

  if (password && retypePassword) {
    if (password != retypePassword) {
      errors.push({
        field: 'retypePassword',
        message: 'Password Confirmation must be same with Password',
      })
    }
  }
  return errors
}




exports.RegisterWisatawan = async (req, res) => {

  let {
    nama,
    notelp,
    email,
    password
  } = req.body


  // let errors = await valid_wisatawanasi_register(req)
  // if (errors.length > 0) return res.status(422).json({ errors })

  try {
    const wisatawan = await Wisatawan.create({
      nama,
      notelp,
      email,
      password
    })

    return res.status(200).json({
      message: "Success Register wisatawan",
      wisatawan
    })

  } catch (err) {
    console.log(err)
  }
}

async function valid_wisatawanasi_Login(req) {
  /* form valid_wisatawanasi mobile  login or signin */
  let email = req.body.email
  let password = req.body.password
  let errors = []
  console.log(Wisatawan)
  console.log(email)
  if (!email) {
    errors.push({
      field: "email",
      message: "Email required"
    })
  }

  if (!password) {
    errors.push({
      field: "password",
      message: "Password required"
    })
  }

  if (email && password) {
    const wisa = await Wisatawan.findOne({
      where: {
        email: { [Op.eq]: email }
      }
    });

    if (!wisa) {
      errors.push({
        field: "email",
        message: "Email not found"
      });
    } else {
      if (password != wisa.password) {
        errors.push({
          field: "password",
          message: "Invalid_wisatawan Password"
        });
      }
    }
  }

  return errors
}

exports.LoginWisatawan = async function (req, res) {
  let { email } = req.body

  // let errors = await valid_wisatawanasi_Login(req)
  // if (errors.length > 0) return res.status(422).json({ errors })

  let wisatawan = await Wisatawan.findOne({
    where: {
      email: { [Op.eq]: email }
    }
  })

  try {
    const hasil = {
      id_wisatawan: wisatawan.id_wisatawan,
      nama: wisatawan.nama,
      password: wisatawan.password,
      email: wisatawan.email,
      notelp: wisatawan.notelp
    }
    res.send(JSON.stringify(hasil))
    // return res.ガー({
    //   message: "Successえみい",
    //   テーマパークガール,
    //   大好きです
    // });
  } catch (error) {
    return res.status(422).json({ errors })
  }
}
exports.lihatdataWisatawan = async (req, res) => {
  const { id_wisatawan } = req.params

  try {
    const wisatawan = await Wisatawan.findOne({
      where: {
        id_wisatawan: { [Op.eq]: id_wisatawan }
      }
    })

    return res.status(200).json({
      message: "Tampilkan data wisatawan bedasarkan id_wisatawan berhasil",
      wisatawan
    })
  } catch (err) {
    console.log(err)
  }

}

exports.Melihatwisata = async (req, res) => {
  const { key } = req.params
  try {
    let wisata = await Wisata.findOne({
      where: {
        NamaWisata: { [Op.eq]: key }
      }
    })
    return res.json({
      message: "Melihat Seluruh data Wisata bedasarkan key",
      wisata
    })
  } catch (err) {
    console.log(err)
  }
}

exports.Melihatsemuawisata = async (req, res) => {
  try {
    let wisata = await Wisata.findAll()
    return res.json({
      message: "Melihat Seluruh data Wisata",
      wisata
    })
  } catch (err) {
    console.log(err)
  }
}

exports.MenambahFeedback = async (req, res) => {
  let {
    id_wisata,
    id_wisatawan,
    feedback
  } = req.body
  const tgl_isi = Date.now(); 
  try {
    const feedback1 = await Feedback.create({
      id_wisata,
      id_wisatawan,
      feedback,
      tgl_isi
    })
    return res.json({
      message: "Success Menambahkan Feedback",
      feedback1
    })
  } catch (err) {
    console.log(err)
  }
}

exports.UpdateProfile = async (req, res) => {
  let {
    id_wisata,
    id_wisatawan,
    feedback
  } = req.body
  const tgl_isi = Date.now();
  try {
    const feedback1 = await Feedback.create({
      id_wisata,
      id_wisatawan,
      feedback,
      tgl_isi
    })
    return res.json({
      message: "Success Menambahkan Feedback",
      feedback1
    })
  } catch (err) {
    console.log(err)
  }
}

exports.UpdateProfile = async (req, res) => {
  const { id_wisatawan } = req.params
  let {
    nama,
    password,
    email,
    notelp
  } = req.body
  try {
    const wisatawan = await Wisatawan.findOne({
      where: { id_wisatawan: { [Op.eq]: id_wisatawan } }
    })
    if (wisatawan) {
      wisatawan.nama = nama
      wisatawan.email = email
      wisatawan.notelp = notelp
      wisatawan.password = password
      await wisatawan.save()
    }
    return res.status(200).json({
      message: "Success update profile",
      wisatawan
    })
  } catch (err) {
    console.log(err)
  }
}
