import { DataTypes } from "sequelize";
import db_connection from "../database/db_connection.js";

const UserModel = db_connection.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "este campo no puede estar vacío",
        },
        len: {
          min: 2,
          msg: "este campo no permite menos de 2 caracteres",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "este campo no puede estar vacío",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "este campo no puede estar vacío",
        },
      },
    },
    role: {
        type: DataTypes.STRING,
        defaultValue:'user',
    },
  },
  {
    timestamps: false,
  }
);

export default UserModel;
