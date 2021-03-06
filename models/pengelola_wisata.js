'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengelola_wisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pengelola_wisata.init({
    id_pengelola: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    NamaPengelola: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pengelola_wisata',
    timestamps: false
  });
  return Pengelola_wisata;
};