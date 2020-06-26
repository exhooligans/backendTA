'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wisata extends Model {
    
    static associate(models) {
      wisata.belongsTo(sequelize.models.Pengelola_wisata, {
        foreignKey: "id_pengelola"
      });
    }
  };
  wisata.init({
    id_wisata: DataTypes.INTEGER,
    id_pengelola: DataTypes.INTEGER,
    NamaWisata: DataTypes.STRING,
    FotoWisata: DataTypes.STRING,
    AlamatWisata: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wisata',
  });
  return wisata;
};