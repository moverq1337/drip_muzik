import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // Включение CORS с настройками
  app.enableCors({
    origin: 'http://localhost:3000', // Разрешаем запросы с фронтенда
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешаем указанные HTTP-методы
    credentials: true, // Разрешаем отправку cookies, если требуется
  });

  await app.listen(3001);
}
bootstrap();
