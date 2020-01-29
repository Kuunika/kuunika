import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from '../categories/categories.module';
import { SourcesModule } from '../sources/sources.module';
import { SearchModule } from '../search/search.module';

@Module({
  imports: [CategoriesModule, SourcesModule, SearchModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
