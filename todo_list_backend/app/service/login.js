/*
   由zhaojunzhe于2018-12-18创建
*/
const Service = require('egg').Service;
class LoginService extends Service{
  async loginTest(ctx, username, password){
    const userModel = ctx.model.User;
    return userModel.findAll({
      attributes: ['username','password'],
      where: {
        username,
      }
    }).then((data) => {
      if (data.length === 0) {
        return {
          success: false,
          status: '403',
          data: {
            err_msg: '用户不存在'
          }
        }
      } else {
        const checkedPassword = data[0].get('password');
        if (checkedPassword === password) {
          return '登录成功';
        } else {
          return '密码错误';
        }
      }
    });
  }
  async login(ctx, username, password){
    const result = await this.loginTest(ctx, username, password);
    this.checkSuccess(result);
    return result;
  }
  checkSuccess(result) {
    console.log(result)
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}
module.exports = LoginService;
