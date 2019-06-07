import express from 'express';
import next from 'next';
import routes from './src/routes';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.EYRA_FRONTEND_PORT || 3000;
// create an instance of the Next library passing in a Boolean based on the environment
// which detects whether to launch Next.js in dev mode or not.
const app = next({ dev, dir: './src' });
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    express().use(handler).listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    }).on('error', (err) => {
      if (err) {
        throw err;
      }
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
