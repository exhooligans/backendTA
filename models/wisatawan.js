'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wisatawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Wisatawan.init({
    id_wisatawan: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama: DataTypes.STRING,
    notelp: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wisatawan',
    timestamps: false
  });
  return Wisatawan;
};