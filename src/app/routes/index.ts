import express from 'express';
import { unknown } from 'zod';

const router = express.Router();

const moduleRoutes = [
  {
    path: '',
    route: unknown,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
