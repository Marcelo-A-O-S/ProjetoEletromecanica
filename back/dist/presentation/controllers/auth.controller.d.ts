import { AuthService } from "src/services/implements/auth.service";
export declare class AuthController {
    private readonly authServices;
    constructor(authServices: AuthService);
    login(body: any): Promise<{
        token: string;
    }>;
    register(body: any): Promise<{
        token: string;
    }>;
}
