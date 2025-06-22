import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorators';

@Injectable()
export class AuthorizeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector){}
  async canActivate(
    context: ExecutionContext,
  ):Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndMerge<string[]>(ROLES_KEY,[
      context.getHandler(),
      context.getClass()
    ]);
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Você não tem permissão para acessar este recurso.');
    }

    return true;
  }
}
