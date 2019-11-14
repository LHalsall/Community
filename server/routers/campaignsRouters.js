const exps = require('express');
const models = require('../models');
const router = exps.Router();

router.get('/all', async (req, res) => {
    const result = await models.campaigns.findAll({
        include:[{
                model: models.users,
                attributes: ["first_name", "surname"]
        }]
    });
    res.send(result);
});

router.get('/:index', async (req, res) => {
    const result = await models.campaigns.findAll({
        where: { id: req.params.index }
    });
    res.send(result);
});

router.post('/post', async (req, res) => {
    await models.campaigns.create(req.body);
    res.send();
});

router.put('/update', async (req, res) => {
    models.campaigns.update(req.body, {
        where: { id: req.body.id }
    });
    res.send();
});

router.delete('/delete/:index', async (req, res) => {
    models.campaigns.destroy({
        where: { id: req.params.index }
    })
    res.send();
});

module.exports = router;