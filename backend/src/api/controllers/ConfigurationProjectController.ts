import { Request, Response } from "express";
import { IConfigurationProjectController } from "./interfaces/IConfigurationProjectController";
import { DeleteConfigurationProjectByIdSchema, DeleteConfigurationProjectSchema, GetConfigurationProjectByIdSchema, SaveConfigurationProjectSchema, UpdateConfigurationProjectSchema } from "./schemas/ConfigurationProjectSchema";
import { ConfigurationProject } from "../domain/models/ConfigurationProject";
import { ConfigurationProjectServices } from "../services/ConfigurationProjectServices";
import { ConfigurationServices } from "../services/ConfigurationServices";
import { JoystickWebSocketConfiguration } from "../domain/models/JoystickWebSocketConfiguration";

export class ConfigurationProjectController implements IConfigurationProjectController{
    async GetById(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await GetConfigurationProjectByIdSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {id} = resultSchema.data;
                const configurationProjectServices = new ConfigurationProjectServices();
                const result = await configurationProjectServices.GetbyId(id);
                if(result.id == 0){
                    res.status(404).json(`Configuração de projeto não encontrada`);
                }else{
                    res.status(200).json(result)
                }
            }else{
                res.status(401).json(resultSchema.error);
            }
            
        }catch(e){
            res.status(500).json(`Erro interno no servidor: ${e}`);
            console.error(`Erro interno no servidor: ${e}`);
        }
    }
    async ListAll(req: Request, res: Response): Promise<void> {
        try{
            const configurationProjectServices = new ConfigurationProjectServices();
            const listConfigurations = await configurationProjectServices.GetAll();
            res.status(200).json(listConfigurations);
        }catch(e){
            res.status(500).json(`Erro interno no servidor: ${e}`)
        }
    }
    async Save(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await SaveConfigurationProjectSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {configurationId,projectId,description} = resultSchema.data;
                const configurationProject = new ConfigurationProject();
                configurationProject.id = 0;
                configurationProject.configurationId = configurationId;
                configurationProject.projectId = projectId;
                configurationProject.description = description;
                const configurationProjectServices = new ConfigurationProjectServices();
                const result = await configurationProjectServices.Save(configurationProject);
                if(result.entity.id == 0){
                    res.status(401).json(result.message);
                }else{
                    res.status(201).json(result.message);
                }
                
            }else{
                res.status(401).json(resultSchema.error);
            }   
        }catch(e){
            console.error("Erro interno no servidor: ",e);
            res.status(500).json(`Erro interno no servidor: ${e}`);
        }
    }
    async Update(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await UpdateConfigurationProjectSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {configurationId,description,id,projectId} = resultSchema.data;
                const configurationProject = new ConfigurationProject();
                configurationProject.id = id;
                configurationProject.configurationId = configurationId;
                configurationProject.projectId = projectId;
                configurationProject.description = description;
                const configurationProjectServices = new ConfigurationProjectServices();
                const result = await configurationProjectServices.Save(configurationProject);
                if(result.entity.id == 0){
                    res.status(401).json(result.message);
                }else{
                    res.status(201).json(result.message);
                }
            }else{
                res.status(401).json(resultSchema.error);
            }   
        }catch(err){
            res.status(500).json(`Erro interno no servidor: ${err}`);
        }
    }
    async Delete(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await DeleteConfigurationProjectSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {id} = resultSchema.data;
                const configurationProjectServices = new ConfigurationProjectServices();
                const result = await configurationProjectServices.DeleteById(id);
                res.status(200).json(result);
            }else{
                res.status(401).json(resultSchema.error);
            }
        }catch(e){
            res.status(500).json(`Erro interno no servidor: ${e}`);
        }
    }
    async DeleteById(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await DeleteConfigurationProjectByIdSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {id} = resultSchema.data;
                const configurationProjectServices = new ConfigurationProjectServices();
                const result = await configurationProjectServices.DeleteById(id);
                res.status(200).json(result);
            }else{
                res.status(401).json(resultSchema.error);
            }
        }catch(e){
            res.status(500).json(`Erro interno no servidor: ${e}`);
        }
    }

}