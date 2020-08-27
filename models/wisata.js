'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wisata extends Model {

    static associate(models) {
      Wisata.belongsTo(sequelize.models.Pengelola_wisata, {
        foreignKey: "id_pengelola"
      });
    }
  };
  Wisata.init({
    id_wisata: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_pengelola: DataTypes.INTEGER,
    NamaWisata: DataTypes.STRING,
    FotoWisata: DataTypes.STRING,
    AlamatWisata: DataTypes.STRING,
    Photo360: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wisata',
    timestamps: false
  });
  return Wisata;
};