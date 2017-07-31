const config = require('config');

module.exports = (route, args = {}) => { 

  route.get('/', async (ctx, next) => { 

    ctx.body = ctx.render(`${config.get('root')}/app/view/index.pug`, {
      user: 'John',
      count: 1
    });
    
  });
  
  route.get('/test', (ctx, next) => { 
    ctx.body = 'test';
  });

  route.get('/demo', (ctx, next) => { 
    ctx.body = 'demo';
  });

};