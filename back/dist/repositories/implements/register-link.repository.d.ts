import { RegisterLink } from "src/domain/entities/register-link.entity";
import { IRegisterLinkRepository } from "../interfaces/register-link-repository.interface";
export declare class RegisterLinkRepository implements IRegisterLinkRepository {
    Update(Entity: RegisterLink): Promise<{
        entity: RegisterLink;
        message: string;
    }>;
    ListAll(): Promise<RegisterLink[]>;
    Save(Entity: RegisterLink): Promise<{
        entity: RegisterLink;
        message: string;
    }>;
    GetbyId(Id: number): Promise<RegisterLink>;
    Delete(Entity: RegisterLink): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
