'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ExamResult.init({
    sname: DataTypes.STRING,
    ename: DataTypes.STRING,
    edate: DataTypes.STRING,
    results: DataTypes.STRING,
    status: DataTypes.STRING,
    grade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ExamResult',
  });
  return ExamResult;
};