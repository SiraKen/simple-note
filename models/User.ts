const { Sequelize } = require("sequelize");
import sequelize from "../plugins/seq";

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    username: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

export default User;
