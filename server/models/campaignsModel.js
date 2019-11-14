module.exports = (sequelize, DataTypes) => {
    return sequelize.define('campaigns', {
 
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        goal: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount_raised: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        goal_reached: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }, {timestamps: false});

}
//user_id and category_id are foreign keys here