module.exports = (app) => {
    app.get('/', (reg, res) => {
        res.json({message: 'hello index!'});
});
    app.use('/api', require('./users')); //在所有users路由前面加/api
    app.use('/api', require('./products')); //在所有users路由前面加/api
    app.use('/api', require('./getLoginBg')); //在所有users路由前面加/api

};
