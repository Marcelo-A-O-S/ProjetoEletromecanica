import { JoystickWebsocketConfiguration } from "src/domain/entities/joystick-websocket-configuration.entity";
import { IJoystickWebSocketConfigurationRepository } from "../interfaces/joystick-websocket-config-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
@Injectable()
export class JoystickWebSocketConfigurationRepository implements IJoystickWebSocketConfigurationRepository{
    constructor(private readonly prisma : PrismaService){}
    async Update(Entity: JoystickWebsocketConfiguration): Promise<{ entity: JoystickWebsocketConfiguration; message: string; }> {
        try{
            const updateConfiguration = await this.prisma.joystickWebsocketConfiguration.update({
                where:{
                    id: Entity.id
                },
                data:{
                    host: Entity.host,
                    protocol: Entity.protocol,
                    dataConfigurationId: Entity.dataConfigurationId,
                    identifier: Entity.identifier
                }
            })
            return { entity:updateConfiguration, message: "Configuração atualizada com sucesso!"};
        }catch(e){
            return {entity: new JoystickWebsocketConfiguration() , message:`Erro interno no servidor: ${e}`};
        }
    }
    async ListAll(): Promise<JoystickWebsocketConfiguration[]> {
        const joystickWebsocketLists: JoystickWebsocketConfiguration[] = []
        const listData = await this.prisma.joystickWebsocketConfiguration.findMany()
        listData.map((joystickWebsocketData)=>{
            const joystickWebSocketConfiguration = new JoystickWebsocketConfiguration();
            joystickWebSocketConfiguration.id = joystickWebsocketData.id;
            joystickWebSocketConfiguration.host = joystickWebsocketData.host;
            joystickWebSocketConfiguration.protocol = joystickWebsocketData.protocol;
            joystickWebSocketConfiguration.identifier = joystickWebsocketData.identifier;
            joystickWebSocketConfiguration.dataConfigurationId = joystickWebsocketData.dataConfigurationId;
            joystickWebsocketLists.push(joystickWebSocketConfiguration);
        })
        return joystickWebsocketLists;

    }
    async Save(Entity: JoystickWebsocketConfiguration): Promise<{ entity: JoystickWebsocketConfiguration; message: string; }> {
        try{
            if(Entity.id == 0){
                const createConfiguration = await this.prisma.joystickWebsocketConfiguration.create({
                    data:{
                        host: Entity.host,
                        protocol: Entity.protocol,
                        dataConfigurationId: Entity.dataConfigurationId,
                        identifier: Entity.identifier
                    }
                })
                return {entity:createConfiguration, message:"Configuração salva com sucesso!"};
            }else{
                const updateConfiguration = await this.prisma.joystickWebsocketConfiguration.update({
                    where:{
                        id: Entity.id
                    },
                    data:{
                        host: Entity.host,
                        protocol: Entity.protocol,
                        dataConfigurationId: Entity.dataConfigurationId,
                        identifier: Entity.identifier
                    }
                })
                return { entity:updateConfiguration, message: "Configuração atualizada com sucesso!"};
            }
        }catch(e){
            return { entity: new JoystickWebsocketConfiguration(), message:`Erro interno no servidor: ${e}`};
        }
    }
    async GetbyId(Id: number): Promise<JoystickWebsocketConfiguration> {
        const joystickWebsocketConfiguration = new JoystickWebsocketConfiguration();
        const joystickWebSocketConfigurationData = await this.prisma.joystickWebsocketConfiguration.findFirst({
            where:{
                id: Id
            }
        })
        if(joystickWebSocketConfigurationData){
            joystickWebsocketConfiguration.id = joystickWebSocketConfigurationData.id;
            joystickWebsocketConfiguration.host = joystickWebSocketConfigurationData.host;
            joystickWebsocketConfiguration.protocol = joystickWebSocketConfigurationData.protocol;
            joystickWebsocketConfiguration.identifier = joystickWebSocketConfigurationData.identifier;
            joystickWebsocketConfiguration.dataConfigurationId = joystickWebSocketConfigurationData.dataConfigurationId;
        }
        return joystickWebsocketConfiguration;
    }
    async Delete(Entity: JoystickWebsocketConfiguration): Promise<string> {
       try{
            await this.prisma.joystickWebsocketConfiguration.delete({
                where:{
                    id: Entity.id
                }
            })
            return "A configuração foi desfeita com sucesso!";
       }catch(err){
            return `Erro interno no servidor: ${err}`
       }
    }
    async DeleteById(Id: number): Promise<string> {
        try{
            await this.prisma.joystickWebsocketConfiguration.delete({
                where:{
                    id: Id
                }
            })
            return "A configuração foi desfeita com sucesso!";
        }catch(err){
            return `Erro interno no servidor: ${err}`
        }
    }

}