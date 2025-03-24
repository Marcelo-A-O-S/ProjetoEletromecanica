import { User } from "../../domain/models/User";
import { IServices } from "./IServices";

export interface IUserServices extends IServices<User>{
    FindByRole(role:string): Promise<User[]>;
    FindByName(name:string): Promise<User>;
    FindByEmail(email:string): Promise<User>;
    FindWithPasswordByEmail(email:string): Promise<User>;
}