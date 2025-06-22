import { HttpException, HttpStatus, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

export class Authorizate implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if(!token){
            throw new HttpException("Acesso negado. Token não fornecido.", HttpStatus.BAD_REQUEST);
        }
        /* const userRole = getAuthUser(token);
        
        if (!userRole || !roles.includes(userRole.role)) {
            throw new HttpException("Acesso negado. Permissão insuficiente", HttpStatus.UNAUTHORIZED); 
        } */
        next();
    }

}