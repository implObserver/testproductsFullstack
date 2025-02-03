import { apiRouter } from '../../../routes/api/api.js';
import { app } from '../../app.js';

export const useRoutes = () => {
  app.use(apiRouter);
};
