/*
   由zhaojunzhe于2018-12-18创建
*/
const jwt = require('jsonwebtoken');

const Service = require('egg').Service;
class LoginService extends Service {
  async loginTest(ctx, username, password) {
    const userModel = ctx.model.User;
    return userModel.findAll({
      attributes: [ 'username', 'password' ],
      where: {
        username,
      },
    }).then(data => {
      if (data.length === 0) {
        return {
          success: false,
          status: '403',
          message: '用户名不正确',
        };
      }
      const checkedPassword = data[0].get('password');
      if (checkedPassword === password) {
        const token = jwt.sign({
          data: {
            username,
            password
          },
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          // iat: Math.floor(Date.now() / 1000 - 60*60)
        }, 'zjz1993');
        return {
          success: true,
          status: 200,
          data: {token}
        };
      }
      return {
        success: false,
        status: '403',
        message: '密码错误',
      };
    });
  }
  async login(ctx, username, password) {
    const result = await this.loginTest(ctx, username, password);
    this.checkSuccess(result);
    return result;
  }
  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg = result.message;
      this.ctx.throw(result.status, result);
    }
    if (!result.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}
module.exports = LoginService;
