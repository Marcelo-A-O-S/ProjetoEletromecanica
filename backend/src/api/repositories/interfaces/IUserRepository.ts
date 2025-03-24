import { User } from "../../domain/models/User";
import { IGenerics } from "./IGenerics";

export interface IUserRepository extends IGenerics<User>{
    FindByName(name:string): Promise<User>;
    FindByRoles(role:string): Promise<User[]>;
    FindByEmail(email:string):Promise<User>;
    FindWithPasswordByEmail(email:string):Promise<User>;
}