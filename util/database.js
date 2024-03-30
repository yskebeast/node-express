const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "nodecomplete", {
  dialect: "mysql",
  host: "password",
});

module.exports = sequelize;
