const Sequelize = require('sequelize');
const db = require('../src/db');

const produto = db.define(
    'produto', {
        ID_PRODUTO: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        NOME: {
            type: Sequelize.VARCHAR(200),
            allowNull: false
        },
        VALOR_COMPRA: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },

        VALOR_VENDA: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },

        QUANTIDADE: {
            type: Sequelize.INTERGER,
            allowNull: false
        },
    });

produto.sync();

module.exports = produto;