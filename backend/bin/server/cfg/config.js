import 'dotenv/config';

export const defaultConfig = {
  port: process.env.PORT || '3001',
  host: process.env.HOST || 'localhost',
};
