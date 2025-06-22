import { ConfigurationServices } from "src/services/implements/config.service";
import { Configuration } from "src/domain/entities/configuration.entity";
export declare class ConfigurationController {
    private readonly configurationServices;
    constructor(configurationServices: ConfigurationServices);
    GetById(id: string): Promise<Configuration>;
    ListAll(): Promise<Configuration[]>;
    Save(body: any): Promise<string>;
    Update(body: any): Promise<string>;
    Delete(body: any): Promise<string>;
    DeleteById(id: string): Promise<string>;
}
