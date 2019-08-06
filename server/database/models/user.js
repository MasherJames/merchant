'use strict';
export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {});
    User.associate = function(models) {
        User.hasMany(models.Product, {
            foreignKey: 'owner',
            as: 'products',
            onDelete: 'CASCADE'
        });
    };
    return User;
};