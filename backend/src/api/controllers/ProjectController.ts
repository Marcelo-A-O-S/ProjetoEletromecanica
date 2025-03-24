import { Request, Response } from "express";
import { IProjectController } from "./interfaces/IProjectController";
import { DeleteProjectByIdSchema, DeleteProjectSchema, ProjectByIdSchema, SaveProjectSchema, UpdateProjectSchema } from "./schemas/ProjectSchema";
import { ProjectServices } from "../services/ProjectServices";
import { Project } from "../domain/models/Project";

export class ProjectController implements IProjectController{
    async GetById(req: Request, res: Response): Promise<void> {
        try{
            const {id} = req.query;
            const resultSchema = await ProjectByIdSchema.safeParseAsync({ id: Number(id) });
            if(resultSchema.success){
                const {id: projectId} = resultSchema.data;
                const projectServices = new ProjectServices();
                const result = await projectServices.GetbyId(projectId);
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
            const projectServices = new ProjectServices();
            const projects = await projectServices.GetAll();
            res.status(200).json(projects);
        }catch(err){
            res.status(500).json(`Erro interno no sevidor: ${err}`)
        }
    }
    async Save(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await SaveProjectSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {description,name} = resultSchema.data;
                const project = new Project();
                project.id = 0;
                project.name = name;
                project.description = description;
                const projectServices = new ProjectServices();
                const result = await projectServices.Save(project);
                if(result.entity.id == 0 ){
                    res.status(401).json(result.message);
                }else{
                    res.status(201).json(result.entity);
                }

            }else{
                res.status(401).json(resultSchema.error);
            }
        }catch(err){
            res.status(500).json(`Erro do servidor: ${err}` );
        }
    }
    async Update(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await UpdateProjectSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const {description,id,name} = resultSchema.data;
                const project = new Project();
                project.id = id;
                project.name = name;
                project.description = description;
                const projectServices = new ProjectServices();
                const result = await projectServices.Update(project);
                if(result.entity.id == 0){
                    res.status(401).json(result.message);
                }else{
                    res.status(201).json(result.entity);
                }

            }
        }catch(err){
            res.status(500).json(`Erro interno do servidor: ${err}`);
        }
    }
    async Delete(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await DeleteProjectSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const { description, id,name} = resultSchema.data;
                const projectServices = new ProjectServices();
                const result = await projectServices.DeleteById(id);
                res.status(201).json(result);
            }
        }catch(err){
            res.status(500).json(`Erro interno do servidor: ${err}`);
        }
    }
    async DeleteById(req: Request, res: Response): Promise<void> {
        try{
            const { id } = req.query;
            const resultSchema = await DeleteProjectByIdSchema.safeParseAsync({ id: Number(id) });
            if(resultSchema.success){
                const { id} = resultSchema.data;
                const projectServices = new ProjectServices();
                console.log("Deletando projeto...")
                const result = await projectServices.DeleteById(id);
                console.log(result)
                res.status(201).json(result);
            }else{
                res.status(401).json(resultSchema.error);
            }
        }catch(err){
            res.status(500).json(`Erro interno do servidor: ${err}`);
        }
    }

}