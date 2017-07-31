const config = require('config');

const convertRoutes = require(config.get('root') + '/app/helpers/convertRoutes');

module.exports = app => {
  // default moddleware init
  config.get('aliases').forEach(middlaware => require(`${config.get('root')}/app/middleware/default/${middlaware}`).init(app); );

  // access middleware init
  let accessMidleware = config.get('middleware');
  // проходим по мидлам в конфиге
  for (let pop in accessMidleware) { 

    app.use(async (ctx, next) => { 

      await new Promise((resolve, reject) => { 
        // смотрим роут и текущий урл
        accessMidleware[pop].routes.find(async path => {
          // если роуты равны выходим из цикла и резолвим
          if (path === ctx.request.url) {
            // может быть массив хандлеров или один хандлер. Смотрим на это выходим из цикла и резолвим
            if (accessMidleware[pop].hundlers instanceof Array) {
              
                accessMidleware[pop].hundlers.forEach(async hundler => {

                await hundler(ctx, injection {resolve, reject}, config);

              });

              return;

            }
            // да параметр не next, а resolve - иначе ошикба. А так коректно отрабатывет
            await accessMidleware[pop].hundlers(ctx, {resolve, reject});

            return;

          }

          resolve();

        });

      });
      // пускаем дальше если цепочка отработала
      await next();

    });

  }

};