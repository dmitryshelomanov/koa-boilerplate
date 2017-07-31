const Koa = require('koa');

const config = require('config');

const router = require('./app/http/routes/registerroutes');

const app = new Koa();

// middleware connect
require('./app/middleware/start')(app);

// init routes
app.use(router);


app.listen(config.get('port'));


