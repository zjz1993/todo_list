/*
   由zhaojunzhe于2018-12-18创建
*/
const Controller = require('egg').Controller;

class Login extends Controller {
  async index() {
    const { ctx }= this;
    const {body:{username, password}} = ctx.request;
    const msg = await ctx.service.login.login(username, password)
    ctx.body = msg;
  }
}

module.exports = Login;
