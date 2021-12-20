const dbConfig = require("../db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.employees = require("./employee.model.js")(sequelize, Sequelize);
// db.employees = require("./emp")(sequelize, Sequelize);
//db.policies = require("./policy")(sequelize, Sequelize);
// db.users = require("./user.model.js")(sequelize, Sequelize);
// db.test = require("./test.model.js")(sequelize, Sequelize);
db.users = require("./user")(sequelize, Sequelize);
module.exports = db;
