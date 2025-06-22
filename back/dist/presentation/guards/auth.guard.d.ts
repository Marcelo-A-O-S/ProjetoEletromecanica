import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/services/implements/auth.service';
export declare class AuthGuard implements CanActivate {
    private readonly authService;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    extractTokenFromHeader(request: Request): string | undefined;
}
