const dbConfig = require("../config/dbConfig");
const colors = require("colors");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      `Database Connection has been established successfully.`.yellow.bold
    );
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.inputValue = require("./inputModel")(sequelize, DataTypes);
db.login = require("./loginModel")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log(`Yes re-sync done!`.green.bold);
});

module.exports = db;
