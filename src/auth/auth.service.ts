import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdministratorService } from 'src/administrator/administrator.service';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdministratorService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.adminService.findOne(username, pass);
    const payload = { username: user.id, sub: user.dni };
    return {
      access_token: await this.jwtService.signAsync(payload),
      id: user.id,
      dni: user.dni,
      isActive: user.isActive,
      isAdminOf: user.career,
    };
  }

  async validateToken(token: string): Promise<any> {
    try {
      const tokenResult = await this.jwtService.verifyAsync(token);
      const user = await this.adminService.findOneById(tokenResult.username);
      const payload = { username: user.id, sub: user.dni };
      return {
        access_token: await this.jwtService.signAsync(payload),
        id: user.id,
        dni: user.dni,
        isActive: user.isActive,
        isAdminOf: user.career,
      };
    } catch (error) {
      return {
        error: 'Token invalido',
      };
    }
  }

  // async refreshToken(token: string): Promise<any> {
  //   try {
  //     const tokenResult = await this.jwtService.verifyAsync(token);
  //     const user = await this.adminService.findOneById(tokenResult.username);
  //     const payload = { username: user.id, sub: user.dni };
  //     return {
  //       access_token: await this.jwtService.signAsync(payload),
  //       id: user.id,
  //       dni: user.dni,
  //       isActive: user.isActive,
  //       isAdminOf: user.career,
  //     };
  //   } catch (error) {
  //     return {
  //       error: 'Token invalido',
  //     };
  //   }
  // }
}
