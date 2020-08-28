const { Feedback } = require("../models");
// const { Wisatawan } = require("../models");
// const { Wisata } = require("../models");

// const feedback = require("../models/feedback");
const Op = require("sequelize").Op

exports.viewKelola_feedback = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.pengelola_wisata
    if (userLogin) {
      const feedback = await Feedback.findAll()
      res.render("pengelola_wisata/kelolafeedback/view_feedback", {

        title: "Data Feedback",
        pengelola_wisata: userLogin,
        feedback: feedback,
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


exports.Kelola_feedbackDelete = (req, res) => {
  const { id_feedback } = req.params
  Feedback.findOne({
    where: {
      id_feedback: { [Op.eq]: id_feedback }
    }
  }).then(feedback => {
    return feedback.destroy().then(() => {
      req.flash('alertMessage', `Berhasi hapus data : ${feedback.feedback}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/pengelola/kelolafeedback")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/pengelola/kelolafeedback/delete")
    });
}
