
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { RedisSingleton } from '@kuunika/redis-connection';
require('dotenv').config();

async function bootstrap() {
  
  RedisSingleton.getInstance(Number.parseInt(process.env.REDIS_PORT), process.env.REDIS_HOST);
  const app = await NestFactory.create(AppModule);
  
  const apiVersion = process.env.PRODUCT_MASTER_API || 'v0';

  const globalPrefix = 'api/' + apiVersion;
  
  app.setGlobalPrefix(globalPrefix);
  
  const port = process.env.port || 3333;
  
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });

}

bootstrap();
