const action = require('./action')

const mycommander = function (program) {
  program
  .command('create <project> [other...]')
  .alias('crt')
  .description('创建项目')
  .action(action)
}

module.exports = mycommander