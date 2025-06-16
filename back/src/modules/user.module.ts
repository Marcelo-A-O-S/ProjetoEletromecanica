import { UserRepository } from "src/repositories/implements/user.repository";
import { PrismaModule } from "src/prisma/prisma.module";
import { Module } from '@nestjs/common';
import { UserServices } from "src/services/implements/user.service";
import { UserController } from "src/presentation/controllers/user.controller";
@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserServices,UserRepository],
  exports: [UserServices],
})
export class UserModule {}
