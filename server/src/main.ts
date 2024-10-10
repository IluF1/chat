import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.enableCors({
        origin: 'http://localhost:5173',
        credentials: true
    })
    app.use(cookieParser())

    const config = new DocumentBuilder()
        .setTitle('Чат')
        .setDescription('Api для чата')
        .setVersion('1.0')
        .addTag('чат')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)
    console.log(process.env.PORT || 3000)
    await app.listen(process.env.PORT || 3000)
}
bootstrap()
