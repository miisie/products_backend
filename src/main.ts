import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './Middlewares/Logging.middleware';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(path.join('cert/key.pem')),
    cert: fs.readFileSync(path.join('cert/cert.pem')),
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transform payload objects to match the DTO structure
      whitelist: true, // Strip away properties not defined in the DTO
      forbidNonWhitelisted: true, // Throw an exception when unknown properties are detected
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Swagger API')
    .setDescription('Docs for API description')
    .setVersion('1.0')
    .addTag('Product Backend')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.use(new LoggerMiddleware().use);

  await app.listen(process.env.PORT);
  console.log(`Server is running at https://localhost:${process.env.PORT}`);
  console.log(`Swagger is running at https://localhost:${process.env.PORT}/swagger`)
}
bootstrap();
