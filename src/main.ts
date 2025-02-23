import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Add this line
  app.setGlobalPrefix('api'); // Add this line
  await app.listen(3001);
}
bootstrap();
// TODO: add all Enums and common dtos
// TODO: add testing
// TODO: add feature future expense
// TODO: connect swagger?
// TODO: connect all dbs
// TODO: add bcrypt, JWT, google login,
// TODO: add Dockerfile + give initial db
// TODO: Remove .envfile
