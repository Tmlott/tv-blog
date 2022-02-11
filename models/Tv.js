const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//creating tv model
class Tv extends Model { }

//create fields/columns for Tv model
Tv.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        //  TODO: Someone can uncomment this and we should be good to go
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tv',
    }
);

module.exports = Tv;