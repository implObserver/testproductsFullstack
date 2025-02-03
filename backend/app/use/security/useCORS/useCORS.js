import cors from 'cors';
import { app } from '../../../app.js';

export const useCORS = () => {
  const site = '';
  const allowedOrigins = [site];

  app.use((req, res, next) => {
    next();
  });

  app.use(
    cors({
      origin: function (origin, callback) {
        // Проверяем, есть ли origin в списке разрешенных
        if (allowedOrigins.includes(origin) || !origin) {
          callback(null, origin);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders:
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    })
  );

  // Важно обрабатывать предзапросы OPTIONS с установленными CORS-заголовками
  app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(204); // Возвращаем статус 204 для успешного завершения OPTIONS-запроса
  });
};
