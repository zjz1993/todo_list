'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/', controller.home.index);
  router.resources('users', '/api/users', controller.user);
  router.post('/api/login', controller.login.index);
};
