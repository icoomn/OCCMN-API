import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService
    ) {}

    async login(authDto: AuthDto) {
        const account = await this.prisma.account.findFirst({
            where: {
                name: authDto.name,
                password: authDto.password
            }
        })
        if (account != null) {
            return this.jwtService.sign({
                id: 'bilibili'
            }, {
                secret: process.env.SECRET
            })
        } else {
            return {
                code: '100',
                message: '登录失败，用户名或密码错误！',
                data: null
            }
        }
    }

    signupLocal(dto: AuthDto) {
        
    }
    signinLocal() {}
    logout() {}
    refreshTokens() {}
}
