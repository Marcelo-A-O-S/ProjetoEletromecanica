import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { loginSchema, registerSchema } from "../schemas/AuthSchemas";
import { AuthService } from "src/services/implements/auth.service";


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authServices: AuthService
    ) { }
    @Post('login')
    async login(@Body() body: any) {
        try {
            const resultSchema = await loginSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { email, password } = resultSchema.data;
            return await this.authServices.login(email, password);
        } catch (err) {
            throw new HttpException(`Erro interno no servidor.`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('register')
    async register(@Body() body: any) {
        try {
            const resultSchema = await registerSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { email, name, password, role } = resultSchema.data;
            return await this.authServices.register(email,password, name);
        } catch (err) {
            throw new HttpException(`Erro interno no servidor.`, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


}