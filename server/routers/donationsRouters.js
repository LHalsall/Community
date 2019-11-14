const exps = require('express');
const models = require('../models');
const router = exps.Router();
const Seq = require('sequelize');

router.get('/all', async (req, res) => {
    const result = await models.donations.findAll({
        include: [{
            model: models.users,
            attributes: ["first_name", "surname"]
        }]
    })
    res.send(result);
});

router.get('/:index', async (req, res) => {
    const result = await models.donations.findAll({
        where: { id: req.params.index }
    });
    res.send(result);
});

router.post('/post', async (req, res) => {
    await models.donations.create(req.body);
    res.send();
});

module.exports = router;