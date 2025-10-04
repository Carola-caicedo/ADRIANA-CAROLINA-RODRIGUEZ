import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { ActorModule } from './actor/actor.module';
import { DirectorModule } from './director/director.module';
import { TheaterModule } from './theater/theater.module';

@Module({
  imports: [MovieModule, ActorModule, DirectorModule, TheaterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
