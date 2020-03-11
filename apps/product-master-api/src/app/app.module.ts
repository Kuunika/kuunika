import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataElementsModule } from '../data-elements/data-elements.module';

@Module({
  imports: [ DataElementsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
