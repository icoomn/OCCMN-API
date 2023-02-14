import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { Response } from './common/response'
import { HttpFilter } from './common/filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
        origin: '*',
        credentials: true
    }
  })
  const options = new DocumentBuilder().setTitle('OCCMN API文档').build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api-docs', app, document)
  app.useGlobalFilters(new HttpFilter())
  app.useGlobalInterceptors(new Response())
  await app.listen(3000)
}
bootstrap()
