import { UserRepository } from "../repositories/implements/user.repository";
import { PrismaModule } from "../prisma/prisma.module";
import { Module } from '@nestjs/common';
import { UserServices } from "../services/implements/user.service";
import { UserController } from "../presentation/controllers/user.controller";
import { AuthModule } from "./auth.module";
@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UserController],
  providers: [UserServices,UserRepository],
  exports: [UserServices],
})
export class UserModule {}
