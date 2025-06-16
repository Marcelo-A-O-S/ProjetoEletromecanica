import { SwitchWebsocketConfiguration } from "src/domain/entities/switch-websocket-configuration.entity";
import { ISwitchWebsocketConfigurationRepository } from "../interfaces/switch-websocket-config-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
@Injectable()
export class SwitchWebsocketConfigurationRepository implements ISwitchWebsocketConfigurationRepository{
    constructor(private readonly prisma:PrismaService){}
    async Update(Entity: SwitchWebsocketConfiguration): Promise<{ entity: SwitchWebsocketConfiguration; message: string; }> {
        try{
            const updateEntity = await this.prisma.switchWebsocketConfiguration.update({
                where:{
                    id: Entity.id
                },
                data:{
                    host: Entity.host,
                    protocol: Entity.protocol,
                    dataConfigurationId: Entity.dataConfigurationId
                }
            })
            return{ entity: updateEntity, message: "Configuracao atualizada com sucesso!"}
        }catch(err){
            return { entity: new SwitchWebsocketConfiguration(), message: `Erro interno no servidor: ${err}`}
        }
    }
    async ListAll(): Promise<SwitchWebsocketConfiguration[]> {
        const switchs: SwitchWebsocketConfiguration[]= [];
        const listData  = await this.prisma.switchWebsocketConfiguration.findMany();
        listData.map((switchData) =>{
            const switchWebsocket = new SwitchWebsocketConfiguration();
            switchWebsocket.id = switchData.id;
            switchWebsocket.host = switchData.host;
            switchWebsocket.protocol = switchData.protocol as "ws://" | "wss://";
            switchWebsocket.dataConfigurationId = switchData.dataConfigurationId;
            switchWebsocket.identifier = switchData.identifier;
            switchs.push(switchWebsocket);
        })
        return switchs;
    }
    async Save(Entity: SwitchWebsocketConfiguration): Promise<{ entity: SwitchWebsocketConfiguration; message: string; }> {
        try{
            if(Entity.id === 0 ){
                const createdEntity = await this.prisma.switchWebsocketConfiguration.create({
                    data:{
                        host: Entity.host,
                        protocol: Entity.protocol,
                        dataConfigurationId: Entity.dataConfigurationId,
                        identifier: Entity.identifier
                    }
                })
                return { entity : createdEntity , message: "Salvo com sucesso!"}
            }else{
                const updateEntity = await this.prisma.switchWebsocketConfiguration.update({
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
                return{ entity: updateEntity, message: "Configuracao atualizada com sucesso!"}
            }
        }catch(err){
            return { entity: new SwitchWebsocketConfiguration(), message: `Erro interno no servidor: ${err}`}
        }
    }
    async GetbyId(Id: number): Promise<SwitchWebsocketConfiguration> {
        const switchWebsocket = new SwitchWebsocketConfiguration();
        const switchData = await this.prisma.switchWebsocketConfiguration.findFirst({
            where:{
                id: Id
            }
        })
        if(switchData){
            switchWebsocket.id = switchData.id;
            switchWebsocket.host = switchData.host;
            switchWebsocket.dataConfigurationId = switchData.dataConfigurationId;
            switchWebsocket.protocol = switchData.protocol;
            switchWebsocket.identifier = switchData.identifier;
        }
        return switchWebsocket;
    }
    async Delete(Entity: SwitchWebsocketConfiguration): Promise<string> {
        try{
            await this.prisma.switchWebsocketConfiguration.delete({
                where:{
                    id: Entity.id
                }
            })
            return "Configuracao deletada com sucesso!";
        }catch(err){
            return `Erro interno no servidor: ${err}`;
        }
    }
    async DeleteById(Id: number): Promise<string> {
        try{
            await this.prisma.switchWebsocketConfiguration.delete({
                where:{
                    id:Id
                }
            })
            return "Configuracao deletada com sucesso!";
        }catch(err){
            return `Erro interno no servidor: ${err}`
        }
    }



}