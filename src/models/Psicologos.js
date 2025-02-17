const db = require("../database");
const { DataTypes } = require('sequelize');

const Psicologos = db.define(
    "Psicologos", 
    {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    }, 
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },

    senha: {
        type: DataTypes.STRING,
    },

    apresentacao: {
        type: DataTypes.STRING,
    },

    /* createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }, */
}, 
{
    tableName: "psicologo",
    timestamps: false,
}
);

module.exports = Psicologos;