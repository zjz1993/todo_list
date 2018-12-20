'use strict';
// const fs = require('fs');
// const path = require('path');
// const jwt = require('jsonwebtoken');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const payload = {
    //   user: 'zjz',
    //   password: 888888
    // }
    // const cert = fs.readFileSync(path.join(__dirname, './private.key'));
    // const token = jwt.sign({
    //   name: 123
    // }, 'salt', {
    //   expiresIn:  '1h' //秒到期时间
    // });
    // // const token = jwt.sign(payload, cert, { algorithm: 'RS256' ,expiresIn:'1h'})
    this.ctx.body = 123;
  }
}

module.exports = HomeController;
