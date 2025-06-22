import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Query, UseGuards } from "@nestjs/common";
import { ProjectServices } from "src/services/implements/project.service";
import { AuthGuard } from "../guards/auth.guard";
import { AuthorizeGuard } from "../guards/authorize.guard";
import { DeleteProjectByIdSchema, DeleteProjectSchema, ProjectByIdSchema, SaveProjectSchema, UpdateProjectSchema } from "../schemas/ProjectSchema";
import { Project } from "src/domain/entities/project.entity";

@Controller('project')
@UseGuards(AuthGuard, AuthorizeGuard)
export class ProjectController {
    constructor(private readonly projectServices: ProjectServices) { }
    @Get('get-by-id')
    async getById(@Query('id') id: string) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new HttpException("ID must be a number valid", HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await ProjectByIdSchema.safeParseAsync({ id: numericId });
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { id: projectId } = resultSchema.data;
            const result = await this.projectServices.GetbyId(projectId);
            return result;
        } catch (err) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Get('all')
    async getAll() {
        try {
            const projects = await this.projectServices.GetAll();
            return projects;
        } catch (err) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @Post('save')
    async Save(@Body() body) {
        try {
            const resultSchema = await SaveProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { description, name } = resultSchema.data;
            const project = new Project();
            project.id = 0;
            project.name = name;
            project.description = description;
            const result = await this.projectServices.Save(project);
            if (result.entity.id == 0) {
                throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
            } else {
                return result.entity;
            }
        } catch (err) {
            throw new HttpException("Erro no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('update')
    async Update(@Body() body) {
        try {
            const resultSchema = await UpdateProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { description, id, name } = resultSchema.data;
            const project = new Project();
            project.id = id;
            project.name = name;
            project.description = description;
            const result = await this.projectServices.Update(project);
            if (result.entity.id == 0) {
                throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
            } else {
                return result.entity;
            }
        } catch (err) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete()
    async Delete(@Body() body) {
        try {
            const resultSchema = await DeleteProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { description, id, name } = resultSchema.data;
            const result = await this.projectServices.DeleteById(id);
            return result;
        } catch (err) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('delete-by-id')
    async DeleteById(@Query('id') id: string) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new HttpException("Id must be a number valid", HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await DeleteProjectByIdSchema.safeParseAsync({ id: numericId });
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { id: projectId } = resultSchema.data;
            const result = await this.projectServices.DeleteById(projectId);
            return result;
        } catch (err) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}