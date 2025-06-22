import { UserServices } from "./user.service";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from 'src/domain/dtos/jwt-payload.dto';
export declare class AuthService {
    private readonly userServices;
    private readonly jwtService;
    constructor(userServices: UserServices, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        token: string;
    }>;
    register(email: string, password: string, name: string): Promise<{
        token: string;
    }>;
    verifyToken(token: string): JwtPayload | null;
}
