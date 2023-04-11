'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg1111122222';
    const userinfo = await this.app.model.User.find();
    this.ctx.body = userinfo;
  }
}

module.exports = HomeController;
