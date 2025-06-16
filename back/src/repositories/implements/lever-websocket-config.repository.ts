import { LeverWebsocketConfiguration } from "src/domain/entities/lever-websocket-config.entity";
import { ILeverWebsocketConfigurationRepository } from "../interfaces/lever-websocket-config-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LeverWebsocketConfigurationRepository implements ILeverWebsocketConfigurationRepository{
    constructor(private readonly prisma: PrismaService){}
    async Update(Entity: LeverWebsocketConfiguration): Promise<{ entity: LeverWebsocketConfiguration; message: string; }> {
        try{
            const updateEntity = await this.prisma.leverWebsocketConfiguration.update({
                where:{
                    id: Entity.id
                },
                data:{
                    dataConfigurationId: Entity.dataConfigurationId,
                    host: Entity.host,
                    identifier: Entity.identifier,
                    protocol: Entity.protocol
                }
            });
            return {entity: updateEntity, message: "Configuracao atualizada com sucesso!"};
        }catch(err){
            return {entity: new LeverWebsocketConfiguration(), message:`Erro interno no servidor: ${err}`}
        }
    }
    async ListAll(): Promise<LeverWebsocketConfiguration[]> {
        const leverWebsockets : LeverWebsocketConfiguration []= [];
        const list = await this.prisma.leverWebsocketConfiguration.findMany();
        list.map((leverData) =>{
            const leverWebsocket = new LeverWebsocketConfiguration();
            leverWebsocket.id = leverData.id;
            leverWebsocket.host = leverData.host;
            leverWebsocket.identifier = leverData.identifier;
            leverWebsocket.protocol = leverData.protocol;
            leverWebsocket.dataConfigurationId =leverData.dataConfigurationId;
            leverWebsockets.push(leverWebsocket);
        });
        return leverWebsockets;
    }
    async Save(Entity: LeverWebsocketConfiguration): Promise<{ entity: LeverWebsocketConfiguration; message: string; }> {
        try{
            if(Entity.id == 0){
                const createdEntity = await this.prisma.leverWebsocketConfiguration.create({
                    data:{
                        host: Entity.host,
                        identifier: Entity.identifier,
                        protocol: Entity.protocol,
                        dataConfigurationId : Entity.dataConfigurationId
                    }
                });
                return { entity: createdEntity, message: "Configuracao salva com sucesso!"};
            }else{
                const updateEntity = await this.prisma.leverWebsocketConfiguration.update({
                    where:{
                        id: Entity.id
                    },
                    data:{
                        dataConfigurationId: Entity.dataConfigurationId,
                        host: Entity.host,
                        identifier: Entity.identifier,
                        protocol: Entity.protocol
                    }
                });
                return {entity: updateEntity, message: "Configuracao atualizada com sucesso!"};
            }
        }catch(err){
            return {entity: new LeverWebsocketConfiguration(), message:`Erro interno no servidor: ${err}`}
        }
    }
    async GetbyId(Id: number): Promise<LeverWebsocketConfiguration> {
        const leverWebsocket = new LeverWebsocketConfiguration();
        const leverWebsocketData = await this.prisma.leverWebsocketConfiguration.findFirst({
            where:{
                id: Id
            }
        });
        if(leverWebsocketData){
            leverWebsocket.id = leverWebsocketData.id;
            leverWebsocket.host = leverWebsocketData.host;
            leverWebsocket.identifier = leverWebsocketData.identifier;
            leverWebsocket.protocol = leverWebsocketData.protocol;
            leverWebsocket.dataConfigurationId =leverWebsocketData.dataConfigurationId;
        }
        return leverWebsocket;
    }
    async Delete(Entity: LeverWebsocketConfiguration): Promise<string> {
        try{
            await this.prisma.leverWebsocketConfiguration.delete({
                where:{
                    id:Entity.id
                }
            });
            return "Configuracao deletada com sucesso!";
        }catch(err){
            return `Erro interno no servidor: ${err}`
        }
    }
    async DeleteById(Id: number): Promise<string> {
        try{
            await this.prisma.leverWebsocketConfiguration.delete({
                where:{
                    id:Id
                }
            });
            return "Configuracao deletada com sucesso!";
        }catch(err){
             return `Erro interno no servidor: ${err}`
        }
    }

}