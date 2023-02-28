import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    login(@Body() authDto: AuthDto) {
        return this.authService.login(authDto)
    }

    @Post('/local/signup')
    signupLocal(@Body() dto: AuthDto) {
        this.authService.signupLocal(dto)
    }

    @Post('/local/signin')
    signinLocal() {
        this.authService.signinLocal()
    }

    @Post('/logout')
    logout() {
        this.authService.logout()
    }

    @Post('/refresh')
    refreshTokens() {
        this.authService.refreshTokens()
    }
}