import { Request, Response } from "express";
import { IAuthController } from "./interfaces/IAuthController";
import { UserServices } from "../services/UserServices";
import { User } from "../domain/models/User";
import { loginSchema, registerSchema } from "./schemas/AuthSchemas";
import { createToken } from "../services/JwtServices";


export class AuthController implements IAuthController {
    async login(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await loginSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const { email, password } = resultSchema.data;
                const userServices = new UserServices();
                const userData = await userServices.FindWithPasswordByEmail(email);
                if (userData.id == 0 || userData.password != password) {
                    res.status(401).json({ message: "Credenciais inválidas!" })
                } else {
                    const token = createToken({email: userData.email, name: userData.name, role: userData.role});
                    res.status(201).json(token);
                }
            } else {
                res.status(401).json(resultSchema.error);
            }
        } catch (err) {
            res.status(500).json({ message: "Internal server error" })
        }
    }
    async register(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await registerSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const { email, name, password, role } = resultSchema.data;
                const userServices = new UserServices();
                const match = await userServices.FindByEmail(email);
                if (match.id != 0) {
                    res.json(null);
                } else {
                    const user = new User();
                    user.email = email;
                    user.name = name;
                    user.password = password;
                    user.role = role;
                    const result = await userServices.Save(user);
                    const token = createToken({email: result.entity.email, name: result.entity.name, role: result.entity.role});
                    res.status(201).json(token);
                }
            } else {
                res.status(401).json(resultSchema.error);
            }

        } catch (err) {
            res.status(500).json({ message: "Internal server error" })
        }

    }


}