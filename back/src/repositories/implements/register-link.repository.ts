import { RegisterLink } from "src/domain/entities/register-link.entity";
import { IRegisterLinkRepository } from "../interfaces/register-link-repository.interface";

export class RegisterLinkRepository implements IRegisterLinkRepository{
    async Update(Entity: RegisterLink): Promise<{ entity: RegisterLink; message: string; }> {
        throw new Error("Method not implemented.");
    }
    ListAll(): Promise<RegisterLink[]> {
        throw new Error("Method not implemented.");
    }
    Save(Entity: RegisterLink): Promise<{ entity: RegisterLink; message: string; }> {
        throw new Error("Method not implemented.");
    }
    GetbyId(Id: number): Promise<RegisterLink> {
        throw new Error("Method not implemented.");
    }
    Delete(Entity: RegisterLink): Promise<string> {
        throw new Error("Method not implemented.");
    }
    DeleteById(Id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }

}