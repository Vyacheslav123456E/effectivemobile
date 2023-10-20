import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import helmet from "helmet";
import {json, urlencoded} from "express";
import {NestExpressApplication} from "@nestjs/platform-express";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(helmet());

  app.use(json({limit: '50mb'}));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.enableCors({ origin: ['http://localhost:3000'], credentials: true });
  const config = new DocumentBuilder()
      .setTitle('Урок по продвинотому BACKEND')
      .setDescription('Документация REST API')
      .setVersion('1.0.0')
      .addTag('ULBI TV')
      .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}
start();


