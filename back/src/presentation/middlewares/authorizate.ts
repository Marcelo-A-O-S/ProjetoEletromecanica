import { NestMiddleware } from "@nestjs/common";

export class Authorizate implements NestMiddleware{
    use(req: Request, res: Response, next: (error?: any) => void) {
        throw new Error("Method not implemented.");
    }

}