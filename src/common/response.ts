import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface Data<T> { data: T }

// 响应拦截器
@Injectable()
export class Response<T> implements NestInterceptor {
    intercept (context: ExecutionContext, next: CallHandler): Observable<Data<T>> {
        return next.handle().pipe(map(data => {
            if (data.code) {
                return {
                    data: data.data,
                    code: data.code,
                    message: data.message
                }
            } else {
                return {
                    data,
                    code: '000',
                    message: 'success'
                }
            }
        }))
    }
}