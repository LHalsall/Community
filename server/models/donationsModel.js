module.exports = (sequelize, DataTypes) => {
    return sequelize.define('donations', {
        donation_made: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, { timestamps: false });

}
//campaign_id and user_id foreign are keys here