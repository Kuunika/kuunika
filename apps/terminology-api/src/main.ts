/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { RedisSingleton } from '@kuunika/redis-connection';
require('dotenv').config();

async function bootstrap() {
  RedisSingleton.getInstance(Number.parseInt(process.env.REDIS_PORT), process.env.REDIS_HOST);
  console.log('new build');
  const app = await NestFactory.create(AppModule);
  const apiVersion = process.env.TERMINOLOGY_SERVICE_API_VERSION;
  const globalPrefix = `api/${apiVersion}`;
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  });

  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
