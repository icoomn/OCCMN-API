import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async login(name: string, password: string) {
        const account = await this.prisma.account.findFirst({
            where: {
                name,
                password
            }
        })
        console.log({account});
        
        if (account) {
            return { data: 'token'}
        } else {
            return { data: '用户名或密码错误' }
        }
    }

    signupLocal(dto: AuthDto) {
        
    }
    signinLocal() {}
    logout() {}
    refreshTokens() {}
}
