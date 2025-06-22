import { IUserRepository } from "../interfaces/user-repository.interface";
import { User } from "src/domain/entities/user.entity";
import { PrismaService } from "src/prisma/prisma.service";
export declare class UserRepository implements IUserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    FindWithPasswordByEmail(email: string): Promise<User>;
    FindByEmail(email: string): Promise<User>;
    FindByName(name: string): Promise<User>;
    FindByRoles(role: string): Promise<User[]>;
    Update(Entity: User): Promise<{
        entity: User;
        message: string;
    }>;
    ListAll(): Promise<User[]>;
    Save(Entity: User): Promise<{
        entity: User;
        message: string;
    }>;
    GetbyId(Id: number): Promise<User>;
    Delete(Entity: User): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
