import { AuthController } from "src/presentation/controllers/auth.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { Module } from "@nestjs/common";
import { UserServices } from "src/services/implements/user.service";
import { UserRepository } from "src/repositories/implements/user.repository";
@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [UserServices,UserRepository],
  exports: [UserServices],
})
export class AuthModule {}
