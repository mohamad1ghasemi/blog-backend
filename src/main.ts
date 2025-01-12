import { NestFactory } from '@nestjs/core';
import { AppModule } from './packages/infrastructure/src/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'node:path';
import * as fs from 'node:fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('blog App API')
    .setDescription('API documentation for blog App')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const customCssPath = path.join(process.cwd(), 'src/swagger-custom.css');
  let customCss = '';

  if (fs.existsSync(customCssPath)) {
    customCss = fs.readFileSync(customCssPath, 'utf8');
  }
  SwaggerModule.setup('api', app, document, {
    customCss,
    customSiteTitle: 'blog App API Docs',
  });

  await app.listen(3003);
}
bootstrap();
