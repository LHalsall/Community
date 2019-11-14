const exps = require('express');
const models = require('../models');
const router = exps.Router();

router.get('/all', async (req, res) => {
    const result = await models.categories.findAll();
    res.send(result);
});

router.get('/:index', async (req, res) => {
    const result = await models.categories.findAll({
        where: { id: req.params.index }
    });
    res.send(result);
});

router.post('/post', async (req, res) => {
    await models.categories.create(req.body);
    res.send();
})

router.delete('/delete/:index', (req, res) => {
    models.categories.destroy({
        where: { id: req.params.index }
    })
    res.send();
})

module.exports = router;