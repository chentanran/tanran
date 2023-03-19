const inquirer = require('inquirer')
const download = require('download-git-repo')

const action = function (project, args) {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'framwork',
      choices: ['express', 'koa', 'egg'],
      message: '请选择你所使用的框架'
    } 
  ])
  .then((answers) => {
    console.log(answers)
    download('chentanran/chentanran.github.io', 'test/tmp', function (err) {
      console.log(err ? 'Error' : 'Success')
    })
  })
}

module.exports = action