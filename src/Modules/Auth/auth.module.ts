import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "../Users/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../../Commons/Constants/constants";
import { JwtStrategy } from "./jwt.strategy";
import AuthController from "./auth.controller";
import { RedisModule } from "../Redis/redis.module";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            // signOptions: { expiresIn: '30m'}
        }),
        RedisModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}