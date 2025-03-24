import { Request, Response } from "express";
import { IUserController } from "./interfaces/IUserController";
import { UserServices } from "../services/UserServices";
import { DeleteByIdUserSchema, DeleteUserSchema, FindByEmailSchema, FindByRolesUserSchema, SaveUserSchema, UpdateUserSchema } from "./schemas/UserSchemas";
import { GetByIdSchema } from "./schemas/GenericSchema";
import { User } from "../domain/models/User";

export class UserController implements IUserController {
    async FindByRoles(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await FindByRolesUserSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const {role} = resultSchema.data;
                const userServices = new UserServices();
                const listUsers = await userServices.FindByRole(role);
                res.status(201).json(listUsers);
            }else{
                res.status(401).json(resultSchema.error);
            }
        } catch (err) {
            res.status(500).json({ message: `Internal server erro: ${err}` });
        }
    }
    async FindByEmail(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await FindByEmailSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const { email } = resultSchema.data;
                if (!email) {
                    res.status(401).json({ message: "Informe o email corretamente" });
                } else {
                    const userServices = new UserServices();
                    const user = await userServices.FindByEmail(email);
                    if (!user) {
                        res.status(404).json(null);
                    } else {
                        res.status(201).json(user);
                    }
                }
            } else {
                res.status(401).json(resultSchema.error);
            }

        } catch (err) {
            res.status(500).json({ message: `Internal server error: ${err}` })
        }
    }
    async GetById(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await GetByIdSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const { Id } = resultSchema.data;
                if (!Id) {
                    res.status(401).json(null);
                } else {
                    const userServices = new UserServices();
                    const user = await userServices.GetbyId(Id);
                    if (!user) {
                        res.status(401).json(null);
                    } else {
                        res.status(201).json(user);
                    }
                }
            } else {
                res.status(401).json(resultSchema.error);
            }
        } catch (err) {
            res.status(500).json({ message: `Internal server error: ${err}` })
        }
    }
    async ListAll(req: Request, res: Response): Promise<void> {
        try {
            const userServices = new UserServices();
            const listUsers = await userServices.GetAll();
            res.status(201).json(listUsers);
        } catch (err) {
            res.status(500).json({ message: `Internal server erro: ${err}` });
        }
    }
    async Save(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await SaveUserSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const { email, name, role, password } = resultSchema.data
                const user = new User();
                user.email = email;
                user.name = name;
                user.password = password;
                user.role = role;
                const userServices = new UserServices();
                const result = await userServices.Save(user);
                if (result.entity.id == 0) {
                    res.status(401).json(result.message);
                } else {
                    res.status(201).json(result.message);
                }
            } else {
                res.status(500).json(resultSchema.error);
            }
        } catch (err) {
            res.status(500).json({ message: `Internal server erro: ${err}` });
        }
    }
    async Update(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await UpdateUserSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const { id, email, name, role, password } = resultSchema.data
                const user = new User();
                user.id = id;
                user.email = email;
                user.name = name;
                user.password = password;
                user.role = role;
                const userServices = new UserServices();
                const result = await userServices.Save(user);
                if (result.entity.id == 0) {
                    res.status(401).json(result.message);
                } else {
                    res.status(201).json(result.message);
                }
            } else {
                res.status(500).json(resultSchema.error);
            }
        } catch (err) {
            res.status(500).json({ message: `Internal server erro: ${err}` });
        }
    }
    async Delete(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await DeleteUserSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const { id, email, name, role, password } = resultSchema.data
                const user = new User();
                user.id = id;
                user.email = email;
                user.name = name;
                user.password = password;
                user.role = role;
                const userServices = new UserServices();
                const result = await userServices.Delete(user);
                res.status(201).json(result);
            } else {
                res.status(500).json(resultSchema.error);
            }
        } catch (err) {
            res.status(500).json({ message: `Internal server erro: ${err}` });
        }
    }
    async DeleteById(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await DeleteByIdUserSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const { id } = resultSchema.data
                const userServices = new UserServices();
                const result = await userServices.DeleteById(id);
                res.status(201).json(result);
            } else {
                res.status(500).json(resultSchema.error);
            }
        } catch (err) {
            res.status(500).json({ message: `Internal server erro: ${err}` });
        }
    }

}