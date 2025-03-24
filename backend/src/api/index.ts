import { IConfig } from ".."
import { App } from "./app";
import { InitializeDatabase } from "./repositories/InitializeDatabase";
export const start = async(config: IConfig)=>{
    await InitializeDatabase();
    new App(config);
}