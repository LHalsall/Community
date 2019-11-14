module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});

}
