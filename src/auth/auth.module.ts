import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AdministratorModule } from 'src/administrator/administrator.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
@Module({
  imports: [
    AdministratorModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
