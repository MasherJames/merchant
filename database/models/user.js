'use strict';
module.exports = (sequelize, DataTypes) => {
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
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isadmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};