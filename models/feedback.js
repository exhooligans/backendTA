'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {

    static associate(models) {
      Feedback.belongsTo(sequelize.models.Wisata, {
        foreignKey: "id_wisata"
      });
    }
    static associate(models) {
      Feedback.belongsTo(sequelize.models.Wisatawan, {
        foreignKey: "id_wisatawan"
      });
    }
  };
  Feedback.init({
    id_feedback: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_wisata: DataTypes.INTEGER,
    id_wisatawan: DataTypes.INTEGER,
    feedback: DataTypes.STRING(12),
    tgl_isi: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Feedback',
    timestamps: false
  });
  return Feedback;
};