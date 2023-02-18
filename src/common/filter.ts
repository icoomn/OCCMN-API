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
            code: status.toString(),
            message: `HTTP状态码：${status}，接口地址：${request.url}，${exception.message}`
        })
    }
}