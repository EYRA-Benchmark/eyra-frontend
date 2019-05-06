import express from 'express';
import next from 'next';
import routes from './src/routes';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.EYRA_FRONTEND_PORT || 3000;
const app = next({ dev, dir: './src' });
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    express().use(handler).listen(port, (err: any) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
