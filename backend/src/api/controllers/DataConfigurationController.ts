import { Request, Response } from "express";
import { IDataConfigurationController } from "./interfaces/IDataConfigurationController";
import { dataConfigurationSchema, SaveDataConfigurationSchema, UpdateDataConfigurationSchema } from "./schemas/DataConfigurationSchema";
import { DataConfiguration } from "../domain/models/DataConfiguration";
import { DataConfigurationServices } from "../services/DataConfigurationServices";
import { JoystickWebSocketConfiguration } from "../domain/models/JoystickWebSocketConfiguration";
import { JoystickWebSocketConfigurationServices } from "../services/JoystickWebSocketConfigurationServices";
import { FORMS } from "../utils/constants";

export class DataConfigurationController implements IDataConfigurationController {
    GetById(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }
    ListAll(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async Save(req: Request, res: Response): Promise<void> {
        try {
            const resultSchema = await SaveDataConfigurationSchema.safeParseAsync(req.body);
            if (resultSchema.success) {
                const { componentKey, dataConfiguration: configuration } = resultSchema.data;
                if (configuration.projectId == 0) {
                    const dataConfiguration = new DataConfiguration();
                    dataConfiguration.configurationId = configuration.configurationId;
                    const dataConfigurationServices = new DataConfigurationServices();
                    const resultDataConfiguration = await dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        res.status(401).json(resultDataConfiguration.message);
                    } else {
                        if (componentKey == FORMS.formJoystickWebsocket) {
                            if (configuration.joystickWebsocketConfiguration) {
                                const joystickWebSocketConfiguration = new JoystickWebSocketConfiguration();
                                joystickWebSocketConfiguration.id = configuration.joystickWebsocketConfiguration.id;
                                joystickWebSocketConfiguration.host = configuration.joystickWebsocketConfiguration.host;
                                joystickWebSocketConfiguration.protocol = configuration.joystickWebsocketConfiguration.protocol;
                                joystickWebSocketConfiguration.dataConfigurationId = resultDataConfiguration.entity.id;
                                const joystickWebSocketConfigurationServices = new JoystickWebSocketConfigurationServices();
                                const resultJoystickWebsocket = await joystickWebSocketConfigurationServices.Save(joystickWebSocketConfiguration);
                                if (resultJoystickWebsocket.entity.id == 0) {
                                    res.status(401).json(resultJoystickWebsocket.message);
                                } else {
                                    res.status(201).json(resultJoystickWebsocket.message);
                                }
                            } else {
                                res.status(401).json(`Dados de configuração inválidos ou não informado`);
                            }
                        }
                    }
                }else{
                    const dataConfiguration = new DataConfiguration();
                    dataConfiguration.configurationId = configuration.configurationId;
                    dataConfiguration.projectId = configuration.projectId;
                    const dataConfigurationServices = new DataConfigurationServices();
                    const resultDataConfiguration = await dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        res.status(401).json(resultDataConfiguration.message);
                    } else {
                        if (componentKey == FORMS.formJoystickWebsocket) {
                            if (configuration.joystickWebsocketConfiguration) {
                                const joystickWebSocketConfiguration = new JoystickWebSocketConfiguration();
                                joystickWebSocketConfiguration.id = configuration.joystickWebsocketConfiguration.id;
                                joystickWebSocketConfiguration.host = configuration.joystickWebsocketConfiguration.host;
                                joystickWebSocketConfiguration.protocol = configuration.joystickWebsocketConfiguration.protocol;
                                joystickWebSocketConfiguration.dataConfigurationId = resultDataConfiguration.entity.id;
                                const joystickWebSocketConfigurationServices = new JoystickWebSocketConfigurationServices();
                                const resultJoystickWebsocket = await joystickWebSocketConfigurationServices.Save(joystickWebSocketConfiguration);
                                if (resultJoystickWebsocket.entity.id == 0) {
                                    res.status(401).json(resultJoystickWebsocket.message);
                                } else {
                                    res.status(201).json(resultJoystickWebsocket.message);
                                }
                            } else {
                                res.status(401).json(`Dados de configuração inválidos ou não informado`);
                            }
                        }
                    }
                }   

            } else {
                res.status(401).json(resultSchema.error)
            }

        } catch (e) {
            res.status(500).json(`Erro interno no servidor: ${e}`);
        }
    }
    async Update(req: Request, res: Response): Promise<void> {
        try{
            const resultSchema = await UpdateDataConfigurationSchema.safeParseAsync(req.body);
            if(resultSchema.success){
                const { componentKey, dataConfiguration: configuration } = resultSchema.data;
                if (configuration.projectId == 0) {
                    const dataConfiguration = new DataConfiguration();
                    dataConfiguration.id = configuration.id;
                    dataConfiguration.configurationId = configuration.configurationId;
                    const dataConfigurationServices = new DataConfigurationServices();
                    const resultDataConfiguration = await dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        res.status(401).json(resultDataConfiguration.message);
                    } else {
                        if (componentKey == FORMS.formJoystickWebsocket) {
                            if (configuration.joystickWebsocketConfiguration) {
                                const joystickWebSocketConfiguration = new JoystickWebSocketConfiguration();
                                joystickWebSocketConfiguration.id = configuration.joystickWebsocketConfiguration.id;
                                joystickWebSocketConfiguration.host = configuration.joystickWebsocketConfiguration.host;
                                joystickWebSocketConfiguration.protocol = configuration.joystickWebsocketConfiguration.protocol;
                                joystickWebSocketConfiguration.dataConfigurationId = resultDataConfiguration.entity.id;
                                const joystickWebSocketConfigurationServices = new JoystickWebSocketConfigurationServices();
                                const resultJoystickWebsocket = await joystickWebSocketConfigurationServices.Save(joystickWebSocketConfiguration);
                                if (resultJoystickWebsocket.entity.id == 0) {
                                    res.status(401).json(resultJoystickWebsocket.message);
                                } else {
                                    res.status(201).json(resultJoystickWebsocket.message);
                                }
                            } else {
                                res.status(401).json(`Dados de configuração inválidos ou não informado`);
                            }
                        }
                    }
                }else{
                    const dataConfiguration = new DataConfiguration();
                    dataConfiguration.configurationId = configuration.configurationId;
                    dataConfiguration.projectId = configuration.projectId;
                    const dataConfigurationServices = new DataConfigurationServices();
                    const resultDataConfiguration = await dataConfigurationServices.Save(dataConfiguration);
                    if (resultDataConfiguration.entity.id == 0) {
                        res.status(401).json(resultDataConfiguration.message);
                    } else {
                        if (componentKey == FORMS.formJoystickWebsocket) {
                            if (configuration.joystickWebsocketConfiguration) {
                                const joystickWebSocketConfiguration = new JoystickWebSocketConfiguration();
                                joystickWebSocketConfiguration.id = configuration.joystickWebsocketConfiguration.id;
                                joystickWebSocketConfiguration.host = configuration.joystickWebsocketConfiguration.host;
                                joystickWebSocketConfiguration.protocol = configuration.joystickWebsocketConfiguration.protocol;
                                joystickWebSocketConfiguration.dataConfigurationId = resultDataConfiguration.entity.id;
                                const joystickWebSocketConfigurationServices = new JoystickWebSocketConfigurationServices();
                                const resultJoystickWebsocket = await joystickWebSocketConfigurationServices.Save(joystickWebSocketConfiguration);
                                if (resultJoystickWebsocket.entity.id == 0) {
                                    res.status(401).json(resultJoystickWebsocket.message);
                                } else {
                                    res.status(201).json(resultJoystickWebsocket.message);
                                }
                            } else {
                                res.status(401).json(`Dados de configuração inválidos ou não informado`);
                            }
                        }
                    }
                }   
            }else{
                res.status(401).json(resultSchema.error);
            }
        }catch(e){
            res.status(500).json(`Erro interno no servidor: ${e}`)
        }
    }
    Delete(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }
    DeleteById(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }

}