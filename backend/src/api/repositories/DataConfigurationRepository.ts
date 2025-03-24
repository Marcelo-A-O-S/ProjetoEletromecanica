import { prisma } from "../data/PrismaClient";
import { DataConfiguration } from "../domain/models/DataConfiguration";
import { IDataConfigurationRepository } from "./interfaces/IDataConfigurationRepository";

export class DataConfigurationRepository implements IDataConfigurationRepository{
    async Update(Entity: DataConfiguration): Promise<{ entity: DataConfiguration; message: string; }> {
        try{
            const updateDataConfiguration = await prisma.dataConfiguration.update({
                where:{
                    id: Entity.id
                },
                data:{
                    configurationId: Entity.configurationId,
                }
            })
            return {entity: updateDataConfiguration, message:`Os dados da configuração foram salvas!`};
        }catch(e){
            return{entity: new DataConfiguration(), message: `Erro interno no servidor: ${e}`};
        }
    }
    async ListAll(): Promise<DataConfiguration[]> {
        const datasConfigurations: DataConfiguration[] = [];
        const listData = await prisma.dataConfiguration.findMany();
        listData.map((dataConfigurationDb)=>{
            const dataConfiguration = new DataConfiguration();
            dataConfiguration.id = dataConfigurationDb.id;
            dataConfiguration.configurationId = dataConfigurationDb.configurationId;
            dataConfiguration.projectId = dataConfigurationDb.projectId;
            datasConfigurations.push(dataConfiguration);
        });
        return datasConfigurations;
    }
    async Save(Entity: DataConfiguration): Promise<{ entity: DataConfiguration; message: string; }> {
        try{
            if(Entity.id == 0){
                const createDataConfiguration = await prisma.dataConfiguration.create({
                    data:{
                        configurationId: Entity.configurationId,

                    }
                })
                return {entity: createDataConfiguration, message:`Os dados da configuração foram salvas!`};
            }else{
                const updateDataConfiguration = await prisma.dataConfiguration.update({
                    where:{
                        id: Entity.id
                    },
                    data:{
                        configurationId: Entity.configurationId,
                    }
                })
                return {entity: updateDataConfiguration, message:`Os dados da configuração foram salvas!`};
            }
        }catch(e){
            return{entity: new DataConfiguration(), message: `Erro interno no servidor: ${e}`};
        }
    }
    async GetbyId(Id: number): Promise<DataConfiguration> {
        const dataConfiguration = new DataConfiguration();
        const dataConfigurationDb = await prisma.dataConfiguration.findFirst({
            where:{
                id: Id
            }
        })
        if(dataConfigurationDb){
            dataConfiguration.id = dataConfigurationDb.id;
            dataConfiguration.configurationId = dataConfigurationDb.configurationId;
            dataConfiguration.projectId = dataConfigurationDb.projectId;
        }
        return dataConfiguration;
    }
    async Delete(Entity: DataConfiguration): Promise<string> {
        await prisma.dataConfiguration.delete({
            where:{
                id: Entity.id
            }
        })
        return "Dados de configuração deletado com sucesso!";
    }
    async DeleteById(Id: number): Promise<string> {
        await prisma.dataConfiguration.delete({
            where:{
                id: Id
            }
        })
        return "Dados de configuração deletado com sucesso!";
    }

}