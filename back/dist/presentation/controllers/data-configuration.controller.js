"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataConfigurationController = void 0;
const common_1 = require("@nestjs/common");
const data_config_service_1 = require("../../services/implements/data-config.service");
const DataConfigurationSchema_1 = require("../schemas/DataConfigurationSchema");
const data_configuration_entity_1 = require("../../domain/entities/data-configuration.entity");
const forms_constants_1 = require("../../domain/constants/forms.constants");
const joystick_websocket_configuration_entity_1 = require("../../domain/entities/joystick-websocket-configuration.entity");
const joystick_websocket_config_service_1 = require("../../services/implements/joystick-websocket-config.service");
const switch_websocket_configuration_entity_1 = require("../../domain/entities/switch-websocket-configuration.entity");
const switch_websocket_config_service_1 = require("../../services/implements/switch-websocket-config.service");
const lever_websocket_config_entity_1 = require("../../domain/entities/lever-websocket-config.entity");
const lever_websocket_config_service_1 = require("../../services/implements/lever-websocket-config.service");
let DataConfigurationController = class DataConfigurationController {
    dataConfigurationServices;
    joystickWebSocketConfigurationServices;
    switchWebsocketConfigurationServices;
    leverWebsocketConfigurationServices;
    constructor(dataConfigurationServices, joystickWebSocketConfigurationServices, switchWebsocketConfigurationServices, leverWebsocketConfigurationServices) {
        this.dataConfigurationServices = dataConfigurationServices;
        this.joystickWebSocketConfigurationServices = joystickWebSocketConfigurationServices;
        this.switchWebsocketConfigurationServices = switchWebsocketConfigurationServices;
        this.leverWebsocketConfigurationServices = leverWebsocketConfigurationServices;
    }
    async GetById(id) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new common_1.HttpException("ID must be a number valid.", common_1.HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await DataConfigurationSchema_1.DataConfigurationByIdSchema.safeParseAsync({ id: numericId });
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { id: configurationId } = resultSchema.data;
            const result = await this.dataConfigurationServices.GetbyId(configurationId);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async ListAll() {
        try {
            const listDataConfigurations = await this.dataConfigurationServices.GetAll();
            return listDataConfigurations;
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async DeleteById(id) {
        const numericId = Number(id);
        if (!id || isNaN(numericId)) {
            throw new common_1.HttpException("ID must be a number valid.", common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const result = await this.dataConfigurationServices.DeleteById(numericId);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Delete(body) {
        try {
            const resultSchema = await DataConfigurationSchema_1.dataConfigurationSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { id } = resultSchema.data;
            return await this.dataConfigurationServices.DeleteById(id);
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Save(body) {
        try {
            const resultSchema = await DataConfigurationSchema_1.SaveDataConfigurationSchema.safeParseAsync(body);
            if (resultSchema.success) {
                const { componentKey, dataConfiguration: configuration } = resultSchema.data;
                if (configuration.projectId == 0) {
                    const dataConfiguration = new data_configuration_entity_1.DataConfiguration();
                    dataConfiguration.configurationId = configuration.configurationId;
                    const resultDataConfiguration = await this.dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        throw new common_1.HttpException(resultDataConfiguration.message, common_1.HttpStatus.BAD_REQUEST);
                    }
                    else {
                        switch (componentKey) {
                            case forms_constants_1.FORMS.formJoystickWebsocket:
                                return await this.saveJoystickWebsocketConfiguration(configuration.joystickWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case forms_constants_1.FORMS.formSwitchWebsocket:
                                return await this.saveSwitchWebsocketConfiguration(configuration.switchWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case forms_constants_1.FORMS.formLeverWebsocket:
                                return await this.saveLeverWebsocketConfiguration(configuration.leverWebsocketConfiguration, resultDataConfiguration.entity.id);
                            default:
                                throw new common_1.HttpException("Tipo de formulário não suportado.", common_1.HttpStatus.BAD_REQUEST);
                        }
                    }
                }
                else {
                    const dataConfiguration = new data_configuration_entity_1.DataConfiguration();
                    dataConfiguration.configurationId = configuration.configurationId;
                    dataConfiguration.projectId = configuration.projectId;
                    dataConfiguration.configurationProjectId = configuration.configurationProjectId;
                    const resultDataConfiguration = await this.dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        throw new common_1.HttpException(resultDataConfiguration.message, common_1.HttpStatus.BAD_REQUEST);
                    }
                    else {
                        switch (componentKey) {
                            case forms_constants_1.FORMS.formJoystickWebsocket:
                                return await this.saveJoystickWebsocketConfiguration(configuration.joystickWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case forms_constants_1.FORMS.formSwitchWebsocket:
                                return await this.saveSwitchWebsocketConfiguration(configuration.switchWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case forms_constants_1.FORMS.formLeverWebsocket:
                                return await this.saveLeverWebsocketConfiguration(configuration.leverWebsocketConfiguration, resultDataConfiguration.entity.id);
                            default:
                                throw new common_1.HttpException("Tipo de formulário não suportado.", common_1.HttpStatus.BAD_REQUEST);
                        }
                    }
                }
            }
            else {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Update(body) {
        try {
            const resultSchema = await DataConfigurationSchema_1.UpdateDataConfigurationSchema.safeParseAsync(body);
            if (resultSchema.success) {
                const { componentKey, dataConfiguration: configuration } = resultSchema.data;
                if (configuration.projectId == 0) {
                    const dataConfiguration = new data_configuration_entity_1.DataConfiguration();
                    dataConfiguration.id = configuration.id;
                    dataConfiguration.configurationId = configuration.configurationId;
                    const resultDataConfiguration = await this.dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        throw new common_1.HttpException(resultDataConfiguration.message, common_1.HttpStatus.BAD_REQUEST);
                    }
                    else {
                        switch (componentKey) {
                            case forms_constants_1.FORMS.formJoystickWebsocket:
                                return await this.saveJoystickWebsocketConfiguration(configuration.joystickWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case forms_constants_1.FORMS.formSwitchWebsocket:
                                return await this.saveSwitchWebsocketConfiguration(configuration.switchWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case forms_constants_1.FORMS.formLeverWebsocket:
                                return await this.saveLeverWebsocketConfiguration(configuration.leverWebsocketConfiguration, resultDataConfiguration.entity.id);
                            default:
                                throw new common_1.HttpException("Tipo de formulário não suportado.", common_1.HttpStatus.BAD_REQUEST);
                        }
                    }
                }
                else {
                    const dataConfiguration = new data_configuration_entity_1.DataConfiguration();
                    dataConfiguration.configurationId = configuration.configurationId;
                    dataConfiguration.projectId = configuration.projectId;
                    const resultDataConfiguration = await this.dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        throw new common_1.HttpException(resultDataConfiguration.message, common_1.HttpStatus.BAD_REQUEST);
                    }
                    else {
                        switch (componentKey) {
                            case forms_constants_1.FORMS.formJoystickWebsocket:
                                return await this.saveJoystickWebsocketConfiguration(configuration.joystickWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case forms_constants_1.FORMS.formSwitchWebsocket:
                                return await this.saveSwitchWebsocketConfiguration(configuration.switchWebsocketConfiguration, resultDataConfiguration.entity.id);
                            case forms_constants_1.FORMS.formLeverWebsocket:
                                return await this.saveLeverWebsocketConfiguration(configuration.leverWebsocketConfiguration, resultDataConfiguration.entity.id);
                            default:
                                throw new common_1.HttpException("Tipo de formulário não suportado.", common_1.HttpStatus.BAD_REQUEST);
                        }
                    }
                }
            }
            else {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async saveJoystickWebsocketConfiguration(config, dataConfigurationId) {
        if (config) {
            const joystickWebSocketConfiguration = new joystick_websocket_configuration_entity_1.JoystickWebsocketConfiguration();
            joystickWebSocketConfiguration.id = config.id;
            joystickWebSocketConfiguration.host = config.host;
            joystickWebSocketConfiguration.protocol = config.protocol;
            joystickWebSocketConfiguration.identifier = config.identifier;
            joystickWebSocketConfiguration.dataConfigurationId = dataConfigurationId;
            const resultJoystickWebsocket = await this.joystickWebSocketConfigurationServices.Save(joystickWebSocketConfiguration);
            if (resultJoystickWebsocket.entity.id == 0) {
                throw new common_1.HttpException(resultJoystickWebsocket.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return resultJoystickWebsocket.message;
            }
        }
        else {
            throw new common_1.HttpException(`Dados de configuração inválidos ou não informado`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async saveSwitchWebsocketConfiguration(config, dataConfigurationId) {
        if (config) {
            const switchWebsocketConfiguration = new switch_websocket_configuration_entity_1.SwitchWebsocketConfiguration();
            switchWebsocketConfiguration.id = config.id;
            switchWebsocketConfiguration.host = config.host;
            switchWebsocketConfiguration.identifier = config.identifier;
            switchWebsocketConfiguration.protocol = config.protocol;
            switchWebsocketConfiguration.dataConfigurationId = dataConfigurationId;
            const resultSwitchWebsocketServices = await this.switchWebsocketConfigurationServices.Save(switchWebsocketConfiguration);
            if (resultSwitchWebsocketServices.entity.id === 0) {
                throw new common_1.HttpException(resultSwitchWebsocketServices.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return resultSwitchWebsocketServices.message;
            }
        }
        else {
            throw new common_1.HttpException(`Dados de configuração inválidos ou não informado`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async saveLeverWebsocketConfiguration(config, dataConfigurationId) {
        if (config) {
            const leverWebsocketConfiguration = new lever_websocket_config_entity_1.LeverWebsocketConfiguration();
            leverWebsocketConfiguration.id = config.id;
            leverWebsocketConfiguration.host = config.host;
            leverWebsocketConfiguration.identifier = config.identifier;
            leverWebsocketConfiguration.protocol = config.protocol;
            leverWebsocketConfiguration.dataConfigurationId = dataConfigurationId;
            const resultLeverWebsocketServices = await this.leverWebsocketConfigurationServices.Save(leverWebsocketConfiguration);
            if (resultLeverWebsocketServices.entity.id === 0) {
                throw new common_1.HttpException(resultLeverWebsocketServices.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return resultLeverWebsocketServices.message;
            }
        }
        else {
            throw new common_1.HttpException(`Dados de configuração inválidos ou não informado`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.DataConfigurationController = DataConfigurationController;
__decorate([
    (0, common_1.Get)('get-by-id'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DataConfigurationController.prototype, "GetById", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DataConfigurationController.prototype, "ListAll", null);
__decorate([
    (0, common_1.Delete)('delete-by-id'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DataConfigurationController.prototype, "DeleteById", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DataConfigurationController.prototype, "Delete", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DataConfigurationController.prototype, "Save", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DataConfigurationController.prototype, "Update", null);
exports.DataConfigurationController = DataConfigurationController = __decorate([
    (0, common_1.Controller)('dataConfiguration'),
    __metadata("design:paramtypes", [data_config_service_1.DataConfigurationServices,
        joystick_websocket_config_service_1.JoystickWebSocketConfigurationServices,
        switch_websocket_config_service_1.SwitchWebsocketConfigurationServices,
        lever_websocket_config_service_1.LeverWebsocketConfigurationServices])
], DataConfigurationController);
//# sourceMappingURL=data-configuration.controller.js.map