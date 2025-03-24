import { prisma } from "../data/PrismaClient";
import { Configuration } from "../domain/models/Configuration";
import { ConfigurationProject } from "../domain/models/ConfigurationProject";
import { IConfigurationProjectRepository } from "./interfaces/IConfigurationProjectRepository";
import { IConfigurationRepository } from "./interfaces/IConfigurationRepository";

export class ConfigurationProjectRepository implements IConfigurationProjectRepository{
    FindAllByProjectId(projectId: number): Promise<ConfigurationProject> {
        throw new Error("Method not implemented.");
    }
    async Update(Entity: ConfigurationProject): Promise<{ entity: ConfigurationProject; message: string; }> {
        try{
            const updateConfigurationProject = await prisma.configurationProject.update({
                where:{
                    id:Entity.id
                },
                data:{
                    projectId: Entity.projectId,
                    description: Entity.description,
                    configurationId: Entity.configurationId
                }
            })
            return {entity: updateConfigurationProject, message: "Configuração do projeto salva com sucesso!"};

        }catch(err){
            console.error("Erro interno no servidor: ",err);
            return {entity: new ConfigurationProject(), message:`Erro interno no servidor: ${err}`};
        }
    }
    async ListAll(): Promise<ConfigurationProject[]> {
        const configurationsProject: ConfigurationProject[] = [];
        const configurationsData = await prisma.configurationProject.findMany({
            include:{
                configuration: true
            }
        });
        configurationsData.map((configurationData)=>{
            const configurationProject  = new ConfigurationProject();
            configurationProject.id = configurationData.id;
            configurationProject.configurationId = configurationData.configurationId;
            configurationProject.projectId = configurationData.projectId;
            configurationProject.description = configurationData.description;
            configurationsProject.push(configurationProject);
        })
        return configurationsProject;
    }
    async Save(Entity: ConfigurationProject): Promise<{ entity: ConfigurationProject; message: string; }> {
        try{
            if(Entity.id === 0 ){
                const createdConfigurationProject = await prisma.configurationProject.create({
                    data:{
                        description: Entity.description,
                        configurationId: Entity.configurationId,
                        projectId: Entity.projectId
                    }
                })
                return {entity: createdConfigurationProject, message:"Configuração do projeto salva com sucesso!"};
            }else{
                const updateConfigurationProject = await prisma.configurationProject.update({
                    where:{
                        id: Entity.id
                    },
                    data:{
                        configurationId: Entity.configurationId,
                        description: Entity.description,
                        projectId: Entity.projectId
                    }
                })
                return {entity: updateConfigurationProject, message:"Configuração do projeto atualizada com sucesso!"};
            }
        }catch(err){
            return {entity: new ConfigurationProject(), message:`Erro interno no servidor: ${err}`};
        }
    }
    GetbyId(Id: number): Promise<ConfigurationProject> {
        throw new Error("Method not implemented.");
    }
    Delete(Entity: ConfigurationProject): Promise<string> {
        throw new Error("Method not implemented.");
    }
    DeleteById(Id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    

}