/*
   由zhaojunzhe于2018-12-18创建
*/
const Service = require('egg').Service;
class LoginService extends Service{
  async login(username, password){
    if (username === 'admin' && password === '888888'){
      return '用户登录成功'
    }
    return '信息填写错误'
  }
}
module.exports = LoginService;
