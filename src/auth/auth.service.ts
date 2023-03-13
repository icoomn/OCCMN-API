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
            },
			include: { role: true }
        })
		const permissions = await this.prisma.permission.findMany({
			where: {
				roles: {
					some: { id: account.roleId }
				}
			}
		})
        if (account != null) {
            const token = this.jwtService.sign({
                occmn: 'YanYunFeng'
            }, {
                secret: process.env.SECRET
            })
			return {
				token,
				permissions
			}
        } else {
            return {
                code: '100',
                message: '登录失败，用户名或密码错误！',
                data: null
            }
        }
    }
}
