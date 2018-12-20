'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543905594319_7251';

  // add your config here
  config.middleware = [ 'errorHandler', 'notfoundHandler', 'isLoginHandler' ],
  config.middleware.notfoundHandler;
  config.middleware.isLogin;
  config.middleware.errorHandler = {
    match: '/api',
  },

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };
  // config.middleware = ['notFoundHandler'];
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'todo_list',
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  return config;
};
