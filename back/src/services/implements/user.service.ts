import { User } from "src/domain/entities/user.entity";
import { UserRepository } from "src/repositories/implements/user.repository";
import { IUserServices } from "../interfaces/user.interfaces";
import { Injectable } from "@nestjs/common";
@Injectable()
export class UserServices implements IUserServices{
    
    constructor(private readonly userRepository: UserRepository){
       
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