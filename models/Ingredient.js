// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Ingredient extends Model { }

// set up fields and rules for Product model
Ingredient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        effect1_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'effect',
                key: 'id'
            },
            allowNull: false
        },
        effect2_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'effect',
                key: 'id'
            },
            allowNull: false
        },
        effect3_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'effect',
                key: 'id'
            },
            allowNull: false
        },
        effect4_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'effect',
                key: 'id'
            },
            allowNull: false
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        base_value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredient',
    }
);

module.exports = Ingredient;