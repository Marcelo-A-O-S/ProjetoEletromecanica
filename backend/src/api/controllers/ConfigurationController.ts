import { Request, Response } from "express";
import { Configuration } from "../domain/models/Configuration";
import { IConfigurationController } from "./interfaces/IConfigurationController";
import { ConfigurationByIdSchema, DeleteConfigurationByIdSchema, DeleteConfigurationSchema, SaveConfigurationSchema, UpdateConfigurationSchema } from "./schemas/ConfigurationSchema";
import { ConfigurationServices } from "../services/ConfigurationServices";

export class ConfigurationController implements IConfigurationController{
    async GetById(req: Request, res: Response): Promise<void> {
        try{
            const {id } = req.query;
            const resultSchema = await ConfigurationByIdSchema.safeParseAsync({id: Number(id)});
            if(resultSchema.success){
                const {id: configurationId} = resultSchema.data;
                const configurationServices = new ConfigurationServices();
                const result = await configurationServices.GetbyId(configurationId);
                res.status(200).json(result);
            }else{
                res.status(401).json(resultSchema.error);
            }
        }catch(err){
            res.status(500).json(`Erro interno no servidor: ${err}`);
        }
    }
    async ListAll(req: Request, res: Response): Promise<void> {
        try{
            const configurationServices  = new ConfigurationServices();
            const configurations = await configurationServices.GetAll();
            res.status(200).json(configurations);
        }catch(err){
            res.status(500).json(`Erro interno no servidor: ${err}`);
        }
    }
    async Save(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await SaveConfigurationSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {description, name,componentKey} = resultSchema.data;
                const configuration = new Configuration();
                configuration.id = 0;
                configuration.name = name;
                configuration.description = description;
                configuration.componentKey = componentKey;
                const configurationServices = new ConfigurationServices();
                const result = await configurationServices.Save(configuration);
                if(result.entity.id ===0 ){
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
    async Update(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await UpdateConfigurationSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {description, name,id,componentKey} = resultSchema.data;
                const configuration = new Configuration();
                configuration.id = id;
                configuration.name = name;
                configuration.description = description;
                configuration.componentKey = componentKey;
                const configurationServices = new ConfigurationServices();
                const result = await configurationServices.Save(configuration);
                if(result.entity.id ===0 ){
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
            const resultSchema = await DeleteConfigurationSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {id,description, name} = resultSchema.data;
                const configurationServices = new ConfigurationServices();
                const result = await configurationServices.DeleteById(id);
                res.status(200).json(result);
            }else{
                res.status(401).json(resultSchema.error);
            }
        }catch(err){
            res.status(500).json(`Erro interno no servidor: ${err}`);
        }
    }
    async DeleteById(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await DeleteConfigurationByIdSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {id} = resultSchema.data;
                const configurationServices = new ConfigurationServices();
                const result = await configurationServices.DeleteById(id);
                res.status(200).json(result);
            }else{
                res.status(401).json(resultSchema.error);
            }
        }catch(err){
            res.status(500).json(`Erro interno no servidor: ${err}`);
        }
    }

}