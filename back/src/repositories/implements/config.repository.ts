import { Configuration } from "src/domain/entities/configuration.entity";
import { IConfigurationRepository } from "../interfaces/config-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
@Injectable()
export class ConfigurationRepository implements IConfigurationRepository{
    constructor(private readonly prisma: PrismaService){}
    async Update(Entity: Configuration): Promise<{ entity: Configuration; message: string; }> {
        try{
            const updateConfiguration = await this.prisma.configuration.update({
                where:{
                    id: Entity.id
                },
                data:{
                    description: Entity.description,
                    name: Entity.name,
                    componentKey:Entity.componentKey,
                    
                }
            });
            return {entity: updateConfiguration, message: "Configuração atualizada com sucesso!"};
        }catch(err){
            console.error("Erro interno no servidor: ",err);
            return {entity: new Configuration(), message:`Erro interno no servidor: ${err}`};
        }
    }
    async ListAll(): Promise<Configuration[]> {
        const configurations: Configuration[] = [];
        const configurationsData = await this.prisma.configuration.findMany({
            include:{
                dataConfigurations:{
                    include:{
                        webSocketConfiguration: true,
                        joystickConfiguration: true,
                        joystickWebsocketConfiguration: true,
                        mqttConfiguration:true,
                        switchWebsocketConfiguration: true,
                        leverWebsocketConfiguration: true,
                    }
                }
            }
        });
        configurationsData.map((configurationData)=>{
            const configuration = new Configuration()
            configuration.id = configurationData.id;
            configuration.description = configurationData.description;
            configuration.name = configurationData.name;
            configuration.componentKey = configurationData.componentKey;
            configuration.dataConfigurations = configurationData.dataConfigurations;
            configurations.push(configuration);
        }) 
        return configurations;
    }
    async Save(Entity: Configuration): Promise<{ entity: Configuration; message: string; }> {
        try{
            if(Entity.id ===0 ){
                const createdConfiguration = await this.prisma.configuration.create({
                    data:{
                        description: Entity.description,
                        name: Entity.name,
                        componentKey:Entity.componentKey,
                        
                    }
                })
                return{entity:createdConfiguration, message: "Configuração salva com sucesso!"};
            }else{
                const updateConfiguration = await this.prisma.configuration.update({
                    where:{
                        id: Entity.id
                    },
                    data:{
                        description: Entity.description,
                        name: Entity.name,
                        componentKey:Entity.componentKey,
                    }
                });
                return {entity: updateConfiguration, message: "Configuração atualizada com sucesso!"};
            }   
        }catch(err){
            console.error("Erro interno no servidor: ",err);
            return {entity: new Configuration(), message:`Erro interno no servidor: ${err}`};
        }
    }
    async GetbyId(Id: number): Promise<Configuration> {
        const configuration = new Configuration();
        const configurationData = await this.prisma.configuration.findFirst({
            where:{
                id: Id
            }
        })
        if(configurationData){
            configuration.id = configurationData.id;
            configuration.description = configurationData.description;
            configuration.name = configurationData.name;
            configuration.componentKey = configurationData.componentKey;
        }
        return configuration;
    }
    async Delete(Entity: Configuration): Promise<string> {
        await this.prisma.configuration.delete({
            where:{
                id:  Entity.id
            }
        })
        return "Configuração deletada com sucesso!"
    }
    async DeleteById(Id: number): Promise<string> {
        await this.prisma.project.delete({
            where:{
                id:  Id
            }
        });
        return "Configuração deletada com sucesso!";

    }


}