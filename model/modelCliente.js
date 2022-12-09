const Sequelize = require('sequelize');

const connection = require('../database/database');


const modelCliente = connection.define(
    'tbl_Cliente',
    {
        idCliente:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nome_cliente:{
            type: Sequelize.STRING(100),
            allowNull: true,
        },

        CPF_cliente:{
            type: Sequelize.STRING(11),
            allowNull: true,
        },

        email_cliente:{
            type: Sequelize.STRING(45),
            allowNull: true,
        },

        telefone_cliente:{
            type: Sequelize.STRING(16),
            allowNull: true,
        }
    }
);

//modelCliente.sync({force:true});

module.exports = modelCliente;
