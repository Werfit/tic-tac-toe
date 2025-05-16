import { registerAs } from '@nestjs/config';

export default registerAs('application', () => ({
  port: parseInt(process.env.PORT ?? '3000'),
  cors: process.env.CORS,
}));
