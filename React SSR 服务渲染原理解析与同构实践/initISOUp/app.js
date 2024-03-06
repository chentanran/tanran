const reactSsr = require('./dist/src/server/middlewares/react-ssr').default;
const koa = require('koa2');
const koaStatic = require('koa-static');
const path = require('path');

const app = new koa();

app.use(koaStatic(path.join(__dirname, './dist/static')))

app.use(reactSsr)

app.listen(9999, () => {
  console.log('server is running on port 9999');
});