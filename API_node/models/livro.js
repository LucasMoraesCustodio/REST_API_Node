'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    
    static associate(models) {
      
    }
  }
  Livro.init({
    fk_editora: DataTypes.INTEGER,
    fk_categoria: DataTypes.INTEGER,
    fk_autor: DataTypes.INTEGER,
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};