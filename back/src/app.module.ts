import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth.module';
import { SeedService } from './services/implements/seed.service';
import { ProjectModule } from './modules/project.module';
import { ConfigurationModule } from './modules/configuration.module';
import { ConfigurationProjectModule } from './modules/configuration-project.module';
import { UserModule } from './modules/user.module';
@Module({
  imports: [AuthModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true }), ProjectModule, ConfigurationModule, ConfigurationProjectModule, UserModule],
  controllers: [AppController],
  providers: [AppService, SeedService],
})
export class AppModule { }
