import { UserServices } from "src/services/implements/user.service";
import { User } from "src/domain/entities/user.entity";
export declare class UserController {
    private readonly userServices;
    constructor(userServices: UserServices);
    findByRoles(role: string): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    getById(id: string): Promise<User>;
    listAll(): Promise<User[]>;
    save(body: any): Promise<{
        message: string;
    }>;
    update(body: any): Promise<{
        message: string;
    }>;
    delete(body: any): Promise<string>;
    deleteById(id: string): Promise<string>;
}
