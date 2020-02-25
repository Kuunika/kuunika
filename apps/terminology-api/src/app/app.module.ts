import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CategoriesModule } from '../categories/categories.module';
import { SearchModule } from '../search/search.module';
import { SourcesModule } from '../sources/sources.module';


@Module({
  imports: [CategoriesModule, SearchModule, SourcesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
