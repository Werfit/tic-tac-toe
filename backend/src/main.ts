import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { INestApplication, ValidationPipe } from '@nestjs/common';

const setupApplication = (
  app: INestApplication,
  configService: ConfigService,
) => {
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: configService.getOrThrow<string>('application.cors'),
    credentials: true,
  });
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  setupApplication(app, config);

  const port = config.getOrThrow<number>('application.port');
  await app.listen(port);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
