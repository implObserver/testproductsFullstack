import { Server } from 'socket.io';
const blog = process.env.BLOG_URL;
const constructor = process.env.CONSTRUCTOR_URL;
export const getSocketIO = (server) => {
  const allowedOrigins = [blog, constructor];

  const io = new Server(server, {
    cors: {
      origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Origin not allowed by CORS'));
        }
      },
      methods: ['GET', 'POST'],
    },
  });

  return io;
};
