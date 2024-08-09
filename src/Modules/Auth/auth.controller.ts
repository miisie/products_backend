import { Body, Controller, Post } from "@nestjs/common";
import { UserLoginDto } from "./dtos/user-login.dto";
import { AuthService } from "./auth.service";
import { RefreshTokensDto } from "./dtos/refresh-tokens.dto";
import { Public } from "../../Decorators/authen.decorators";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
@ApiTags('Auth')
@Controller('auth')
export default class AuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    @Public()
    @Post('login')
    @ApiResponse({ status: 200, description: 'Successfully login' })
    async login(@Body() userLoginDto: UserLoginDto) {
        return await this.authService.login(userLoginDto);
    }

    @Public()
    @Post('refresh-tokens')
    async refreshTokens(@Body() refreshTokensDto: RefreshTokensDto) {
        return await this.authService.refreshTokens(refreshTokensDto.refreshToken);
    }
}