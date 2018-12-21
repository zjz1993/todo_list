/*
   由zhaojunzhe于2018-12-20创建
*/
const jwt = require('jsonwebtoken');
function verifyToken(token) {
  let cert = 'zjz1993';
  let res = '';
  try {
    let result = jwt.verify(token, cert) || {};
    console.log(result);
    let {exp, iat} = result, current = Math.floor(Date.now() / 1000);
    if (current <= exp) {
      res = result.data || {};
    }
  } catch (e) {
    console.log(e);
  }
  return res;
}
module.exports = () => {
  return async function isLogin(ctx, next) {
    await next();
    const {request: {url, header}} = ctx;
    // 登录不做判断
    if (url !== '/api/login') {
      const token = header.authorization;
      verifyToken(token);
    }
  };
};
