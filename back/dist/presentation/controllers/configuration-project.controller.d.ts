import { ConfigurationProjectServices } from "src/services/implements/config-project.service";
import { ConfigurationProject } from "src/domain/entities/configuration-project.entity";
export declare class ConfigurationProjectController {
    private readonly configurationProjectServices;
    constructor(configurationProjectServices: ConfigurationProjectServices);
    GetById(id: string): Promise<ConfigurationProject>;
    ListAll(): Promise<ConfigurationProject[]>;
    Save(body: any): Promise<string>;
    Update(body: any): Promise<string>;
    Delete(body: any): Promise<string>;
    DeleteById(id: string): Promise<string>;
}
