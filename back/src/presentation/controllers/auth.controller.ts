import { UserServices } from "src/services/implements/user.service";
import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { loginSchema, registerSchema } from "../schemas/AuthSchemas";
import { User } from "src/domain/entities/user.entity";
import { createToken } from "src/services/implements/jwt.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly userServices: UserServices) { }
    @Post('login')
    async login(@Body() body: any) {
        try {
            const resultSchema = await loginSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { email, password } = resultSchema.data;
            const userData = await this.userServices.FindWithPasswordByEmail(email);
            if (userData.id == 0 || userData.password != password) {
                throw new HttpException("Credenciais inválidas!", HttpStatus.UNAUTHORIZED);

            } else {
                const token = createToken({ email: userData.email, name: userData.name, role: userData.role });
                return { token }
            }

        } catch (err) {
            throw new HttpException(`Internal server error: ${err}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
            const match = await this.userServices.FindByEmail(email);
            if (match.id != 0) {
                return null
            } else {
                const user = new User();
                user.email = email;
                user.name = name;
                user.password = password;
                user.role = role;
                const result = await this.userServices.Save(user);
                const token = createToken({ email: result.entity.email, name: result.entity.name, role: result.entity.role });
                return {token};
            }

        } catch (err) {
            throw new HttpException(`Internal server error: ${err}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


}