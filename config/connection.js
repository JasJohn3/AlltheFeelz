const Sequelize = require('sequelize');


require('dotenv').config();

let sequelize;

if (process.env.JASWDB_URL){
  sequelize = new Sequelize(process.env.JASWDB_URL);
}else{

  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,{
    host:'localhost',
    dialect: 'mysql',
    port: 3006
  })
}

module.exports = sequelize;