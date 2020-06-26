'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {

    static associate(models) {
      feedback.belongsTo(sequelize.models.wisata, {
        foreignKey: "id_wisata"
      });
    }
    static associate(models) {
      feedback.belongsTo(sequelize.models.wisatawan, {
        foreignKey: "id_wisatawan"
      });
    }
  };
  feedback.init({
    id_feedback: DataTypes.INTEGER,
    id_wisata: DataTypes.INTEGER,
    id_wisatawan: DataTypes.INTEGER,
    tgl_isi: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'feedback',
  });
  return feedback;
};