module.exports = (sequelize, DataTypes) => {
    return sequelize.define('categories', {
      
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {timestamps: false });

}