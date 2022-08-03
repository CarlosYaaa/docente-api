import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.use(json({ limit: '15mb' }));
  app.disable('x-powered-by');
  app.setGlobalPrefix(process.env.CONTEXT || '');
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
