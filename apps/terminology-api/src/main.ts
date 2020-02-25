/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {RedisSingleton} from '@kuunika/redis-connection'; 

async function bootstrap() {
  RedisSingleton.getInstance();
  const app = await NestFactory.create(AppModule,{
    
  });
  const apiVersion = 'v0';
  const globalPrefix = `api/${apiVersion}`;
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  app.enableCors();
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
