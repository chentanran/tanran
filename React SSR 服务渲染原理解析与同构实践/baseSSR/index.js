const React = require('react');
const http = require('http');
const { renderToString } = require('react-dom/server')

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>hello react ssr!</h1>
  }
}

http.createServer((req, res) => {
  const html = renderToString(<Index />);
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });



  res.end(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>传统 ssr</title>
      </head>
      <body>
          <div id="root">
              ${html}
          </div>
      </body>
    </html>
  `);
}).listen(9999);