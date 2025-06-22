import { User } from "src/domain/entities/user.entity";
import { UserRepository } from "src/repositories/implements/user.repository";
import { IUserServices } from "../interfaces/user.interfaces";
export declare class UserServices implements IUserServices {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    FindWithPasswordByEmail(email: string): Promise<User>;
    FindByRole(role: string): Promise<User[]>;
    FindByName(name: string): Promise<User>;
    FindByEmail(email: string): Promise<User>;
    Save(entity: User): Promise<{
        entity: User;
        message: string;
    }>;
    GetAll(): Promise<User[]>;
    GetbyId(id: number): Promise<User>;
    Delete(entity: User): Promise<string>;
    DeleteById(Id: number): Promise<string>;
    Update(entity: User): Promise<{
        entity: User;
        message: string;
    }>;
}
