import { Router } from 'express';

const routes = new Router();
routes.get('/', (req, res) => {
  const msg = 'hello world';
  return res.json({ msg });
});

export default routes;
