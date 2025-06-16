import { User } from "src/domain/entities/user.entity";
import { IServices } from "./services.interface";

export interface IUserServices extends IServices<User>{
    FindByRole(role:string): Promise<User[]>;
    FindByName(name:string): Promise<User>;
    FindByEmail(email:string): Promise<User>;
    FindWithPasswordByEmail(email:string): Promise<User>;
}