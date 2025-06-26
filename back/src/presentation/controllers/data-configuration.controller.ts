import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Query, Put } from "@nestjs/common";
import { DataConfigurationServices } from "src/services/implements/data-config.service";
import { DataConfigurationByIdSchema, dataConfigurationSchema, JoystickWebSocketConfigurationSchema, LeverWebsocketConfigurationSchema, SaveDataConfigurationSchema, SwitchWebsocketConfigurationSchema, UpdateDataConfigurationSchema } from "../schemas/DataConfigurationSchema";
import { DataConfiguration } from "src/domain/entities/data-configuration.entity";
import { FORMS } from "src/domain/constants/forms.constants";
import { JoystickWebsocketConfiguration } from "src/domain/entities/joystick-websocket-configuration.entity";
import { JoystickWebSocketConfigurationServices } from "src/services/implements/joystick-websocket-config.service";
import { SwitchWebsocketConfiguration } from "src/domain/entities/switch-websocket-configuration.entity";
import { SwitchWebsocketConfigurationServices } from "src/services/implements/switch-websocket-config.service";
import { LeverWebsocketConfiguration } from "src/domain/entities/lever-websocket-config.entity";
import { LeverWebsocketConfigurationServices } from "src/services/implements/lever-websocket-config.service";
import { IJoystickWebsocketConfiguration } from "src/domain/entities/interfaces/joystick-websocket-configuration.interface";

@Controller('dataConfiguration')
export class DataConfigurationController {
    constructor(
        private readonly dataConfigurationServices: DataConfigurationServices,
        private readonly joystickWebSocketConfigurationServices: JoystickWebSocketConfigurationServices,
        private readonly switchWebsocketConfigurationServices: SwitchWebsocketConfigurationServices,
        private readonly leverWebsocketConfigurationServices: LeverWebsocketConfigurationServices
    ) { }
    @Get('get-by-id')
    async GetById(@Query('id') id: string) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new HttpException("ID must be a number valid.", HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await DataConfigurationByIdSchema.safeParseAsync({ id: numericId });
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { id: configurationId } = resultSchema.data;
            const result = await this.dataConfigurationServices.GetbyId(configurationId);
            return result;
        } catch (err) {
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Get('all')
    async ListAll(){
        try{
            const listDataConfigurations = await this.dataConfigurationServices.GetAll();
            return listDataConfigurations;
        }catch(err){
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('delete-by-id')
    async DeleteById(@Query('id') id: string){
        const numericId = Number(id);
        if(!id || isNaN(numericId)){
            throw new HttpException("ID must be a number valid.", HttpStatus.BAD_REQUEST);
        }
        try{
            const result = await this.dataConfigurationServices.DeleteById(numericId);
            return result;
        }catch(err){
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @Delete()
    async Delete(@Body() body){
        try{
            const resultSchema = await dataConfigurationSchema.safeParseAsync(body);
            if(!resultSchema.success){
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const {id} = resultSchema.data;
            return await this.dataConfigurationServices.DeleteById(id);
        }catch(err){
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('save')
    async Save(@Body() body ){
        try{
            const resultSchema = await SaveDataConfigurationSchema.safeParseAsync(body);
            if(resultSchema.success){
                const { componentKey, dataConfiguration: configuration } = resultSchema.data;
                if(configuration.projectId == 0){
                    const dataConfiguration = new DataConfiguration();
                    dataConfiguration.configurationId = configuration.configurationId;
                    const resultDataConfiguration = await this.dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        throw new HttpException(resultDataConfiguration.message, HttpStatus.BAD_REQUEST);
                    }else{
                        switch(componentKey){
                            case FORMS.formJoystickWebsocket:
                                return await  this.saveJoystickWebsocketConfiguration(configuration.joystickWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case FORMS.formSwitchWebsocket:
                                return await this.saveSwitchWebsocketConfiguration(configuration.switchWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case FORMS.formLeverWebsocket:
                                return await this.saveLeverWebsocketConfiguration(configuration.leverWebsocketConfiguration, resultDataConfiguration.entity.id);
                            default:
                                throw new HttpException("Tipo de formulário não suportado.", HttpStatus.BAD_REQUEST);
                        }
                    }
                }else{
                    const dataConfiguration = new DataConfiguration();
                    dataConfiguration.configurationId = configuration.configurationId;
                    dataConfiguration.projectId = configuration.projectId;
                    dataConfiguration.configurationProjectId = configuration.configurationProjectId;
                    const resultDataConfiguration = await this.dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        throw new HttpException(resultDataConfiguration.message, HttpStatus.BAD_REQUEST);
                    }else{
                        switch(componentKey){
                            case FORMS.formJoystickWebsocket:
                                return await  this.saveJoystickWebsocketConfiguration(configuration.joystickWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case FORMS.formSwitchWebsocket:
                                return await this.saveSwitchWebsocketConfiguration(configuration.switchWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case FORMS.formLeverWebsocket:
                                return await this.saveLeverWebsocketConfiguration(configuration.leverWebsocketConfiguration, resultDataConfiguration.entity.id);
                            default:
                                throw new HttpException("Tipo de formulário não suportado.", HttpStatus.BAD_REQUEST);
                        }
                    }
                }
            }else{
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
        }catch(err){
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Put('update')
    async Update(@Body() body){
        try{
            const resultSchema = await UpdateDataConfigurationSchema.safeParseAsync(body);
            if(resultSchema.success){
                const { componentKey, dataConfiguration: configuration } = resultSchema.data;
                if (configuration.projectId == 0) {
                    const dataConfiguration = new DataConfiguration();
                    dataConfiguration.id = configuration.id;
                    dataConfiguration.configurationId = configuration.configurationId;
                    const resultDataConfiguration = await this.dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        throw new HttpException(resultDataConfiguration.message, HttpStatus.BAD_REQUEST);
                    } else {
                        switch(componentKey){
                            case FORMS.formJoystickWebsocket:
                                return await  this.saveJoystickWebsocketConfiguration(configuration.joystickWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case FORMS.formSwitchWebsocket:
                                return await this.saveSwitchWebsocketConfiguration(configuration.switchWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case FORMS.formLeverWebsocket:
                                return await this.saveLeverWebsocketConfiguration(configuration.leverWebsocketConfiguration, resultDataConfiguration.entity.id);
                            default:
                                throw new HttpException("Tipo de formulário não suportado.", HttpStatus.BAD_REQUEST);
                        }
                    }
                }else{
                    const dataConfiguration = new DataConfiguration();
                    dataConfiguration.configurationId = configuration.configurationId;
                    dataConfiguration.projectId = configuration.projectId;
                    const resultDataConfiguration = await this.dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        throw new HttpException(resultDataConfiguration.message, HttpStatus.BAD_REQUEST);
                    } else {
                        switch(componentKey){
                            case FORMS.formJoystickWebsocket:
                                return await  this.saveJoystickWebsocketConfiguration(configuration.joystickWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case FORMS.formSwitchWebsocket:
                                return await this.saveSwitchWebsocketConfiguration(configuration.switchWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case FORMS.formLeverWebsocket:
                                return await this.saveLeverWebsocketConfiguration(configuration.leverWebsocketConfiguration, resultDataConfiguration.entity.id);
                            default:
                                throw new HttpException("Tipo de formulário não suportado.", HttpStatus.BAD_REQUEST);
                        }
                    }
                }   
            }else{
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
        }catch(e){
            throw new HttpException("Erro interno no servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    private async saveJoystickWebsocketConfiguration(config: JoystickWebSocketConfigurationSchema | null | undefined, dataConfigurationId: number) { 
        if (config) {
            const joystickWebSocketConfiguration = new JoystickWebsocketConfiguration();
            joystickWebSocketConfiguration.id = config.id;
            joystickWebSocketConfiguration.host = config.host;
            joystickWebSocketConfiguration.protocol = config.protocol;
            joystickWebSocketConfiguration.identifier = config.identifier;
            joystickWebSocketConfiguration.dataConfigurationId = dataConfigurationId;
            const resultJoystickWebsocket = await this.joystickWebSocketConfigurationServices.Save(joystickWebSocketConfiguration);
            if (resultJoystickWebsocket.entity.id == 0) {
                throw new HttpException(resultJoystickWebsocket.message, HttpStatus.BAD_REQUEST);
            } else {
                return resultJoystickWebsocket.message;
            }
        } else {
            throw new HttpException(`Dados de configuração inválidos ou não informado`, HttpStatus.BAD_REQUEST);
        }
    }
    private async saveSwitchWebsocketConfiguration(config: SwitchWebsocketConfigurationSchema | null | undefined, dataConfigurationId: number){
        if(config){
            const switchWebsocketConfiguration = new SwitchWebsocketConfiguration();
            switchWebsocketConfiguration.id = config.id;
            switchWebsocketConfiguration.host = config.host;
            switchWebsocketConfiguration.identifier = config.identifier;
            switchWebsocketConfiguration.protocol = config.protocol;
            switchWebsocketConfiguration.dataConfigurationId = dataConfigurationId;
            const resultSwitchWebsocketServices = await this.switchWebsocketConfigurationServices.Save(switchWebsocketConfiguration);
            if(resultSwitchWebsocketServices.entity.id === 0 ){
                throw new HttpException(resultSwitchWebsocketServices.message, HttpStatus.BAD_REQUEST);
            }else{
                return resultSwitchWebsocketServices.message;
            }
        }else{
            throw new HttpException(`Dados de configuração inválidos ou não informado`, HttpStatus.BAD_REQUEST);
        }
    }
    private async saveLeverWebsocketConfiguration(config: LeverWebsocketConfigurationSchema  | null | undefined, dataConfigurationId: number){
        if(config){
            const leverWebsocketConfiguration = new LeverWebsocketConfiguration();
            leverWebsocketConfiguration.id = config.id;
            leverWebsocketConfiguration.host = config.host;
            leverWebsocketConfiguration.identifier = config.identifier;
            leverWebsocketConfiguration.protocol = config.protocol;
            leverWebsocketConfiguration.dataConfigurationId = dataConfigurationId;
            const resultLeverWebsocketServices = await this.leverWebsocketConfigurationServices.Save(leverWebsocketConfiguration);
            if(resultLeverWebsocketServices.entity.id === 0 ){
                throw new HttpException(resultLeverWebsocketServices.message, HttpStatus.BAD_REQUEST);
            }else{
                return resultLeverWebsocketServices.message;
            }
        }else{
            throw new HttpException(`Dados de configuração inválidos ou não informado`, HttpStatus.BAD_REQUEST);
        }
    }
}