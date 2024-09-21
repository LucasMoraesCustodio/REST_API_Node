'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editora extends Model {

    static associate(models) {
      
    }
  }
  Editora.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Editora',
  });
  return Editora;
};