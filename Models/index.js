const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = requre("sequelize");

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
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.inputs = require("./inputModel")(sequelize, DataTypes);
db.login = require("./loginModel")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes re-sync done!");
});

module.exports = db;
