import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { UserLoginDto } from "./dtos/user-login.dto";
import { AuthService } from "./auth.service";
import { RefreshTokensDto } from "./dtos/refresh-tokens.dto";
import { Public } from "../../Decorators/authen.decorators";
import { ApiOkResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { LoginSuccessDto } from "../../Commons/Responses/Swagger-response-dtos/Auth/login-success.dto";
import { LoginFailDto } from "../../Commons/Responses/Swagger-response-dtos/Auth/login-fail.dto";
import { InvalidRefreshDto } from "../../Commons/Responses/Swagger-response-dtos/Auth/invalid-refresh-token.dto";
import { SuccessRefreshTokensDto } from "../../Commons/Responses/Swagger-response-dtos/Auth/success-refresh-tokens.dto";
import { InvalidInputDto } from "../../Commons/Responses/Swagger-response-dtos/Common/invalid-input.dto";
@ApiTags('Auth')
@Controller('auth')
export default class AuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    @Public()
    @Post('login')
    @ApiUnauthorizedResponse({type: LoginFailDto})
    @ApiResponse({status: HttpStatus.UNPROCESSABLE_ENTITY, type: InvalidInputDto})
    @ApiOkResponse({type: LoginSuccessDto})
    async login(@Body() userLoginDto: UserLoginDto) {
        return await this.authService.login(userLoginDto);
    }

    @Public()
    @ApiUnauthorizedResponse({type: InvalidRefreshDto})
    @ApiResponse({status: HttpStatus.UNPROCESSABLE_ENTITY, type: InvalidInputDto})
    @ApiOkResponse({type: SuccessRefreshTokensDto})
    @Post('refresh-tokens')
    async refreshTokens(@Body() refreshTokensDto: RefreshTokensDto) {
        return await this.authService.refreshTokens(refreshTokensDto.refreshToken);
    }
}