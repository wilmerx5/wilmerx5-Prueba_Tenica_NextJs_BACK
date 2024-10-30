import { Module } from '@nestjs/common';


import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'misecret', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
    providers: [AuthService,JwtAuthGuard],
    exports: [AuthService, JwtModule],
    controllers: [AuthController],
})
export class AuthModule {}
