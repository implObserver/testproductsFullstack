import { useSecurityMiddlewares } from './security/index.js';
import { useFilesMiddleware } from './files/index.js';
import { useLoggingMiddleware } from './logging/index.js';
import { useRequestParsersMiddleware } from './requestParsers/index.js';
import { useRoutes } from './routes/useRoutes.js';
import { useSession } from './session/useSession.js';
import { useErrorsMiddleware } from './errors/index.js';

export const useDevMiddlewares = () => {
  useSecurityMiddlewares();
  useSession();
  useLoggingMiddleware();
  useRequestParsersMiddleware();
  useFilesMiddleware();
  useRoutes();
  useErrorsMiddleware();
};
