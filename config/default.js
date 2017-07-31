const authHundler = require(`${process.cwd()}/app/middleware/access/auth`);

module.exports = {
  aliases: [
    "favicon",
    "static",
    "logger",
    "templates",
    "errors",
    "session",
    "bodyParser",
    "multipartParser"    
  ],
  middleware: {
    auth: {
      // масив с роутами. Может по маске сделать? это метод хелпер еще. или пакет написать. Ну пока пусть так
      routes: ['/'],
      // хандлеры. Обычные функции, массив или одна функция
      hundlers:  authHundler
    }
  },
  port: 3000,
  root: process.cwd()
};