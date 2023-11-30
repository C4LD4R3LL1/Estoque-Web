const Sequelize = require('sequelize');
const db = require('../src/db');

const funcionario = db.define(
    'funcionario', {
        ID_FUNCIONARIO: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        CPF: {
            type: Sequelize.VARCHAR(11),
            allowNull: false
        },
        EMAIL: {
            type: Sequelize.VARCHAR(200),
            allowNull: false
        },
        DATA_NASCIMENTO: {
            type: Sequelize.DATE,
            allowNull: false
        },

        SENHA: {
            type: Sequelize.VARCHAR(200),
            allowNull: false
        },

        NOME_FUNCIONARIO: {
            type: Sequelize.VARCHAR(200),
            allowNull: false
        },
    });

funcionario.sync();

module.exports = funcionario;