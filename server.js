const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src' })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      return app.render(req, res, '/');
    });

    server.get('/benchmarks', (req, res) => app.render(req, res, '/benchmarks'));
    server.get('/benchmark/:uuid', (req, res) => app.render(req, res, '/benchmark', { uuid: req.params.uuid }));
    server.get('/about', (req, res) => app.render(req, res, '/about'));
    server.get('/news/:id', (req, res) => app.render(req, res, '/news', { id: req.params.id }));


    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
