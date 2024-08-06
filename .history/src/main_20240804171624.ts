import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '..', 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '..', 'cert', 'cert.pem')),
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });
  console.log(`Server is running at https://localhost:${process.env.PORT}`)
  await app.listen(process.env.PORT);
}
bootstrap();
