import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'

// 异常拦截器
@Catch(HttpException)
export class HttpFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response = ctx.getResponse<Response>()
        const status = exception.getStatus()
        response.status(status).json({
            data: null,
            code: '9999',
            message: `HTTP状态码：${status}， ${exception.message}`
            // status,
            // time: new Date(),
            // path: request.url,
            // success: false
        })
    }
}