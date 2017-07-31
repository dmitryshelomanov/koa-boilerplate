const Router = require('koa-router');

const router = new Router();

require('./web')(router, {
  prefix: ''
});

require('./admin')(router, {
  prefix: 'admin'
});

module.exports = router.routes();