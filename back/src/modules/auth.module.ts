import { AuthController } from "../presentation/controllers/auth.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { Module } from "@nestjs/common";
import { UserServices } from "../services/implements/user.service";
import { UserRepository } from "../repositories/implements/user.repository";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "../services/implements/auth.service";
@Module({
  imports: [PrismaModule, JwtModule.registerAsync({
    inject:[ConfigService],
    useFactory:(config: ConfigService)=>({
      secret: config.getOrThrow('JWT_SECRET'),
      signOptions: {expiresIn: '7d'}
    })
  })],
  controllers: [AuthController],
  providers: [UserServices,UserRepository, AuthService],
  exports: [UserServices, AuthService],
})
export class AuthModule {}
