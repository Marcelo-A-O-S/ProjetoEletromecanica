import { User } from "src/domain/entities/user.entity";
import { IGenerics } from "./generics.interface";

export interface IUserRepository extends IGenerics<User>{
    FindByName(name:string): Promise<User>;
    FindByRoles(role:string): Promise<User[]>;
    FindByEmail(email:string):Promise<User>;
    FindWithPasswordByEmail(email:string):Promise<User>;
}