import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/services/implements/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService
  ){}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if(!token){
      throw new UnauthorizedException();
    }
    try{
      const payload = this.authService.verifyToken(token);
      request['user'] = payload;
    }catch(err){
      throw new UnauthorizedException();
    }
    return true;
  }
  extractTokenFromHeader(request: Request): string | undefined {
    const [type,token] = request.headers.authorization?.split(' ')?? [];
    return type === "Bearer" ?token: undefined 
  }
}
