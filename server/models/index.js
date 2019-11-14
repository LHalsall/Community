const Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'personal_project',
    'root',
    'password',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);

// Models

const campaigns = sequelize.import(__dirname + '/campaignsModel');
const categories = sequelize.import(__dirname + '/categoriesModel');
const users = sequelize.import(__dirname + '/usersModel');
const donations = sequelize.import(__dirname + '/donationsModel');

// Association

// 1:M Users:Campaigns
campaigns.belongsTo(users);
users.hasMany(campaigns);

// 1:M Campaigns:Categories
campaigns.belongsTo(categories);
categories.hasMany(campaigns);

// M:M Donations:Campaigns
users.belongsToMany(campaigns, { through: donations });
campaigns.belongsToMany(users, { through: donations });

donations.belongsTo(users);
donations.belongsTo(campaigns);

sequelize.sync();
//{force: true}

module.exports = {
    users,
    campaigns,
    categories,
    donations
};



