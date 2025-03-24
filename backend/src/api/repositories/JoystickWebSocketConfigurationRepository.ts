import { prisma } from "../data/PrismaClient";
import { JoystickWebSocketConfiguration } from "../domain/models/JoystickWebSocketConfiguration";
import { IJoystickWebSocketConfigurationRepository } from "./interfaces/IJoystickWebSocketConfigurationRepository";

export class JoystickWebSocketConfigurationRepository implements IJoystickWebSocketConfigurationRepository{
    async Update(Entity: JoystickWebSocketConfiguration): Promise<{ entity: JoystickWebSocketConfiguration; message: string; }> {
        try{
            const updateConfiguration = await prisma.joystickWebSocketConfiguration.update({
                where:{
                    id: Entity.id
                },
                data:{
                    host: Entity.host,
                    protocol: Entity.protocol,
                    dataConfigurationId: Entity.dataConfigurationId,
                }
            })
            return { entity:updateConfiguration, message: "Configuração atualizada com sucesso!"};
        }catch(e){
            return {entity: new JoystickWebSocketConfiguration() , message:`Erro interno no servidor: ${e}`};
        }
    }
    async ListAll(): Promise<JoystickWebSocketConfiguration[]> {
        const joystickWebsocketLists: JoystickWebSocketConfiguration[] = []
        const listData = await prisma.joystickWebSocketConfiguration.findMany()
        listData.map((joystickWebsocketData)=>{
            const joystickWebSocketConfiguration = new JoystickWebSocketConfiguration();
            joystickWebSocketConfiguration.id = joystickWebsocketData.id;
            joystickWebSocketConfiguration.host = joystickWebsocketData.host;
            joystickWebSocketConfiguration.protocol = joystickWebsocketData.protocol;
            joystickWebSocketConfiguration.dataConfigurationId = joystickWebsocketData.dataConfigurationId;
            joystickWebsocketLists.push(joystickWebSocketConfiguration);
        })
        return joystickWebsocketLists;

    }
    async Save(Entity: JoystickWebSocketConfiguration): Promise<{ entity: JoystickWebSocketConfiguration; message: string; }> {
        try{
            if(Entity.id == 0){
                const createConfiguration = await prisma.joystickWebSocketConfiguration.create({
                    data:{
                        host: Entity.host,
                        protocol: Entity.protocol,
                        dataConfigurationId: Entity.dataConfigurationId,
                    }
                })
                return {entity:createConfiguration, message:"Configuração salva com sucesso!"};
            }else{
                const updateConfiguration = await prisma.joystickWebSocketConfiguration.update({
                    where:{
                        id: Entity.id
                    },
                    data:{
                        host: Entity.host,
                        protocol: Entity.protocol,
                        dataConfigurationId: Entity.dataConfigurationId,
                    }
                })
                return { entity:updateConfiguration, message: "Configuração atualizada com sucesso!"};
            }
        }catch(e){
            return { entity: new JoystickWebSocketConfiguration(), message:`Erro interno no servidor: ${e}`};
        }
    }
    async GetbyId(Id: number): Promise<JoystickWebSocketConfiguration> {
        const joystickWebSocketConfiguration = new JoystickWebSocketConfiguration();
        const joystickWebSocketConfigurationData = await prisma.joystickWebSocketConfiguration.findFirst({
            where:{
                id: Id
            }
        })
        if(joystickWebSocketConfigurationData){
            joystickWebSocketConfiguration.id = joystickWebSocketConfigurationData.id;
            joystickWebSocketConfiguration.host = joystickWebSocketConfigurationData.host;
            joystickWebSocketConfiguration.protocol = joystickWebSocketConfigurationData.protocol;
            joystickWebSocketConfiguration.dataConfigurationId = joystickWebSocketConfigurationData.dataConfigurationId;
        }
        return joystickWebSocketConfiguration;
    }
    async Delete(Entity: JoystickWebSocketConfiguration): Promise<string> {
        await prisma.joystickWebSocketConfiguration.delete({
            where:{
                id: Entity.id
            }
        })
        return "A configuração foi desfeita com sucesso!";
    }
    async DeleteById(Id: number): Promise<string> {
        await prisma.joystickWebSocketConfiguration.delete({
            where:{
                id: Id
            }
        })
        return "A configuração foi desfeita com sucesso!";;
    }

}