import { Body, Controller, Post } from "@nestjs/common";
import { UserLoginDto } from "./dtos/userLogin.dto";
import { AuthService } from "./auth.service";
import { RefreshTokensDto } from "./dtos/refreshTokens.dto";

@Controller('auth')
export default class AuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    @Post('login')
    async login(@Body() userLoginDto: UserLoginDto) {
        return await this.authService.login(userLoginDto);
    }

    @Post('refresh-tokens')
    async refreshTokens(@Body() refreshTokensDto: RefreshTokensDto) {
        return await this.authService.refreshTokens(refreshTokensDto.refreshToken);
    }
}