import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { validate } from 'src/shared/utilities/environment-validator.utility';
import { GameModule } from './game/game.module';
import appConfig from 'src/config/application.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      load: [appConfig],
      isGlobal: true,
    }),
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
