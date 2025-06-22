import * as bcrypt from 'bcrypt';
import { UserServices } from "./user.service";
import { User } from "src/domain/entities/user.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from 'src/domain/dtos/jwt-payload.dto';
@Injectable()
export class AuthService {
    constructor(private readonly userServices: UserServices, private readonly jwtService: JwtService) { }
    async login(email: string, password: string) {
        const userData = await this.userServices.FindWithPasswordByEmail(email);
        if (userData.id == 0 || !(await bcrypt.compare(password, userData.password))) {
            throw new HttpException("Credenciais inválidas!", HttpStatus.UNAUTHORIZED);

        } else {
            const payload = { name: userData.name, email: userData.email, role: userData.role, sub: userData.id }
            const token = this.jwtService.sign(payload)
            return {token}
        }
    }
    async register(email: string, password: string, name: string) {
        const match = await this.userServices.FindByEmail(email);
        if (match.id != 0) {
            throw new HttpException("Usuário já existe", HttpStatus.CONFLICT);
        }
        const user = new User();
        user.email = email;
        user.name = name;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.role = "user";
        const result = await this.userServices.Save(user);
        const payload = { name: result.entity.name, email: result.entity.email, role: result.entity.role, sub: result.entity.id }
        const token = this.jwtService.sign(payload)
        return { token }
    }
    verifyToken(token: string): JwtPayload | null {
        try {
            const decode = this.jwtService.verify<JwtPayload>(token)
            return decode;
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                console.error('Token expirado!');
            } else {
                console.error('Token inválido:', (error as Error).message);
            }
            return null;
        }
    }
}



