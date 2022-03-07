const { Sequelize } = require("sequelize");
import sequelize from "../plugins/seq";

const Note = sequelize.define(
  "Note",
  {
    // Model attributes are defined here
    title: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    body: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

export default Note;
