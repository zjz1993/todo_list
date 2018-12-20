/*
   由zhaojunzhe于2018-12-20创建
*/
module.exports = () => {
  return async function isLogin(ctx, next) {
    await next();
    console.log(ctx);
  };
};
