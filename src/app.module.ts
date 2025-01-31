import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FizzbuzzService } from './fizzbuzz/fizzbuzz.service';
import { YahyzyService } from './yahyzy/yahyzy.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FizzbuzzService, YahyzyService],
})
export class AppModule {}
