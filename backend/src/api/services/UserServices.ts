import { User } from "../domain/models/User";
import { UserRepository } from "../repositories/UserRepository";
import { IUserServices } from "./interfaces/IUserServices";

export class UserServices implements IUserServices{
    userRepository: UserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }
    async FindWithPasswordByEmail(email: string): Promise<User> {
        return await this.userRepository.FindWithPasswordByEmail(email);
    }
    async FindByRole(role: string): Promise<User[]> {
        return await this.userRepository.FindByRoles(role);
    }
    async FindByName(name: string): Promise<User> {
        return await this.userRepository.FindByName(name);
    }
    async FindByEmail(email: string): Promise<User> {
        return await this.userRepository.FindByEmail(email);
    }
    async Save(entity: User): Promise<{entity:User, message:string}> {
        return await this.userRepository.Save(entity);
    }
    async GetAll(): Promise<User[]> {
        return await this.userRepository.ListAll();
    }
    async GetbyId(id: number): Promise<User> {
        return await this.userRepository.GetbyId(id);
    }
    async Delete(entity: User): Promise<string> {
        return await this.userRepository.Delete(entity);
    }
    async DeleteById(Id: number): Promise<string> {
        return await this.userRepository.DeleteById(Id);
    }
    async Update(entity: User): Promise<{entity:User, message:string}> {
        return await this.userRepository.Update(entity);
    }

}