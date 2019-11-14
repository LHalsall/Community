
const exps = require('express');
const cors = require('cors');
const campaignsRouter = require('./routers/campaignsRouters');
const categoriesRouter = require('./routers/categoriesRouters');
const donationsRouter = require('./routers/donationsRouters');
const usersRouter = require('./routers/usersRouters');
const app = exps();


app.use(cors());
app.use(exps.json());

app.use('/campaigns', campaignsRouter);
app.use('/categories', categoriesRouter);
app.use('/donations', donationsRouter);
app.use('/users', usersRouter);

app.use((err, req, res, next) => {
    res.status(500).send({
        message: 'Problems occured',
        error: err
    });
});

app.listen(8080, () => {
    console.log('Running');
});