import { NestFactory } from '@nestjs/core';
import env from './server/config/env';
import { AppModule } from './server/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(env.app.port);
}

bootstrap();
