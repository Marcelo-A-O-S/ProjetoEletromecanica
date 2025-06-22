import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Query, UseGuards } from "@nestjs/common";
import { ConfigurationServices } from "src/services/implements/config.service";
import { ConfigurationByIdSchema, DeleteConfigurationSchema, SaveConfigurationSchema, UpdateConfigurationSchema } from "../schemas/ConfigurationSchema";
import { Configuration } from "src/domain/entities/configuration.entity";
import { AuthGuard } from "../guards/auth.guard";
import { AuthorizeGuard } from "../guards/authorize.guard";
import { Roles } from "../decorators/roles.decorators";


@Controller("configuration")
@UseGuards(AuthGuard, AuthorizeGuard)
export class ConfigurationController {
    constructor(private readonly configurationServices: ConfigurationServices) { }
    @Get('get-by-id')
    @Roles('admin')
    async GetById(@Query('id') id: string) {
        const numericId = Number(id);
        if (!id || isNaN(numericId)) {
            throw new HttpException("ID must be a valid number", HttpStatus.BAD_REQUEST);
        }
        const resultSchema = await ConfigurationByIdSchema.safeParseAsync({ id: numericId });
        if (!resultSchema.success) {
            throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
        }
        const { id: configurationId } = resultSchema.data;
        try {
            const result = await this.configurationServices.GetbyId(configurationId);
            return result;
        } catch (err) {
            throw new HttpException("Erro interno no servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Get('all')
    async ListAll() {
        try {
            return await this.configurationServices.GetAll();
        } catch (err) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('save')
    async Save(@Body() body) {

        const resultSchema = await SaveConfigurationSchema.safeParseAsync(body);
        if (!resultSchema.success) {
            throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
        }
        const { description, name, componentKey } = resultSchema.data;
        const configuration = new Configuration();
        configuration.id = 0;
        configuration.name = name;
        configuration.description = description;
        configuration.componentKey = componentKey;
        try {
            const result = await this.configurationServices.Save(configuration);
            if (result.entity.id === 0) {
                throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
            } else {
                return result.message
            }
        } catch (err) {
            throw new HttpException('Erro interno no servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('update')
    async Update(@Body() body) {
        const resultSchema = await UpdateConfigurationSchema.safeParseAsync(body);
        if (!resultSchema.success) {
            throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
        }
        const { description, name, id, componentKey } = resultSchema.data;
        const configuration = new Configuration();
        configuration.id = id;
        configuration.name = name;
        configuration.description = description;
        configuration.componentKey = componentKey;
        const result = await this.configurationServices.Save(configuration);
        try {
            if (result.entity.id === 0) {
                throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
            } else {
                return result.message;
            }
        } catch (err) {
            throw new HttpException("Erro interno no servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete()
    async Delete(@Body() body) {

        const resultSchema = await DeleteConfigurationSchema.safeParseAsync(body);
        if (!resultSchema.success) {
            throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
        }
        const { id, description, name } = resultSchema.data;
        try {
            const result = await this.configurationServices.DeleteById(id);
            return result;
        } catch (err) {
            throw new HttpException('Erro interno no servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('delete-by-id')
    async DeleteById(@Query('id') id: string){
        try{
            const numericId = Number(id);
            if(!id || isNaN(numericId)){
                throw new HttpException("ID must be a valid number", HttpStatus.BAD_REQUEST);
            }
            const result = await this.configurationServices.DeleteById(numericId);
            return result
        }catch(err){
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}