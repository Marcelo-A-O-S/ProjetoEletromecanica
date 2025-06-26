import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Query, Put } from "@nestjs/common";
import { ConfigurationProjectServices } from "src/services/implements/config-project.service";
import { DeleteConfigurationProjectByIdSchema, DeleteConfigurationProjectSchema, GetConfigurationProjectByIdSchema, SaveConfigurationProjectSchema, UpdateConfigurationProjectSchema } from "../schemas/ConfigurationProjectSchema";
import { ConfigurationProject } from "src/domain/entities/configuration-project.entity";
@Controller('configurationProject')
export class ConfigurationProjectController {
    constructor(private readonly configurationProjectServices: ConfigurationProjectServices) { }
    @Get('get-by-id')
    async GetById(@Query('id') id: string) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new HttpException("ID must be a number valid", HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await GetConfigurationProjectByIdSchema.safeParseAsync(numericId);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { id: configurationProjectId } = resultSchema.data;
            const result = await this.configurationProjectServices.GetbyId(configurationProjectId);
            if (result.id == 0) {
                throw new HttpException("Not Found.", HttpStatus.NOT_FOUND);
            } else {
                return result;
            }

        } catch (e) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Get('all')
    async ListAll() {
        try {
            const listConfigurations = await this.configurationProjectServices.GetAll();
            return listConfigurations;
        } catch (e) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('save')
    async Save(@Body() body) {
        try {
            const resultSchema = await SaveConfigurationProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { configurationId, projectId, description } = resultSchema.data;
            const configurationProject = new ConfigurationProject();
            configurationProject.id = 0;
            configurationProject.configurationId = configurationId;
            configurationProject.projectId = projectId;
            configurationProject.description = description;
            const result = await this.configurationProjectServices.Save(configurationProject);
            if (result.entity.id == 0) {
                throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
            } else {
                return result.message;
            }
        } catch (e) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('update')
    async Update(@Body() body) {
        try {
            const resultSchema = await UpdateConfigurationProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { configurationId, description, id, projectId } = resultSchema.data;
            const configurationProject = new ConfigurationProject();
            configurationProject.id = id;
            configurationProject.configurationId = configurationId;
            configurationProject.projectId = projectId;
            configurationProject.description = description;
            const result = await this.configurationProjectServices.Save(configurationProject);
            if (result.entity.id == 0) {
                throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
            } else {
                return result.message;
            }
        } catch (err) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete()
    async Delete(@Body() body) {
        try {
            const resultSchema = await DeleteConfigurationProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { id } = resultSchema.data;
            const result = await this.configurationProjectServices.DeleteById(id);
            return result
        } catch (e) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('delete-by-id')
    async DeleteById(@Query('id') id:string){
        try{
            const numericId = Number(id);
            if(!id || isNaN(numericId)){
                throw new HttpException("Id must be a number valid", HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await DeleteConfigurationProjectByIdSchema.safeParseAsync(numericId);
            if(!resultSchema.success){
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const {id: configurationProjectId} = resultSchema.data;
            const result = await this.configurationProjectServices.DeleteById(configurationProjectId);
            return result;
        }catch(e){
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}