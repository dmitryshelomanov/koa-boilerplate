module.exports = (route, args = {}) => { 

  route.get(`/${args.prefix}/dashboard`, (ctx, next) => { 
    ctx.body = "dashboard";
  });

};