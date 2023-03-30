const inquirer = require('inquirer')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

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
    const spinner = ora('').start();
    spinner.text = '代码正在下载中......'
    download('chentanran/chentanran.github.io', `test/${project}`, function (err) {
      if (!err) {
        spinner.succeed('代码已下载完成')
        console.log(chalk.blue.bold('你可以执行：'))
        console.log(`cd test/${project}`)
        console.log(`npm install`)
        console.log(`npm run serve`)
      } else {
        spinner.fail('代码下载失败')
      }
    })
  })
}

module.exports = action