const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("express", "root", "root", {
  host: "localhost",
  port: 8889,
  dialect: "mysql",
});

export default sequelize;
