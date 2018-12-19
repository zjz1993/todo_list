/*
   由zhaojunzhe于2018-12-18创建
*/
const Controller = require('egg').Controller;

const createRule = {
  username: 'string',
  password: 'string'
}

class Login extends Controller {
  async index() {
    const { ctx }= this;
    ctx.validate(createRule, ctx.request.body);
    const {body:{username, password}} = ctx.request;
    const msg = await ctx.service.login.login(ctx, username, password)
    ctx.body = msg;
  }
}

module.exports = Login;
