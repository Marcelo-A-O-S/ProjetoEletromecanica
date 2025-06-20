import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import { Input } from "../ui/input";
import { Select, Option } from "../ui/select";
import { z } from "zod";
import { DataConfiguration } from "@/domain/models/DataConfiguration";
import { addDataConfiguration, updateDataConfiguration } from "@/services/dataConfigurationServices";
import { IDataConfiguration } from "@/domain/interfaces/IDataConfiguration";
import { ILeverWebsocketConfiguration } from "@/domain/interfaces/ILeverWebsocketConfiguration";
import { LeverWebsocketConfiguration } from "@/domain/models/LeverWebsocketConfiguration";
interface FormLeverWebsocketProps {
    configuration: IDataConfiguration,
    configurationId: number,
    componentKey: string,
    onSuccess: () => void,
    projectId?: number,
    configurationProjectId?: number
}
const FormLeverWebsocketSchema = z.object({
    host: z.string(),
    protocol: z.string(),
    identifier: z.string()
})
export default function FormLeverWebsocket({ configuration, configurationId, componentKey, onSuccess, projectId,configurationProjectId }: FormLeverWebsocketProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<ILeverWebsocketConfiguration>(
        configuration?.leverWebsocketConfiguration
            ? {
                dataConfigurationId: configuration.leverWebsocketConfiguration.dataConfigurationId,
                host: configuration.leverWebsocketConfiguration.host,
                id: configuration.leverWebsocketConfiguration.id,
                protocol: configuration.leverWebsocketConfiguration.protocol,
                identifier: configuration.leverWebsocketConfiguration.identifier
            }
            : {
                dataConfigurationId: 0,
                host: "",
                id: 0,
                protocol: "ws://",
                identifier: ""
            }
    );
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    useEffect(() => {
        openDialog();
        console.log(configuration)
    }, [])
    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    }
    const closeDialog = () => {
        setFormData({
            dataConfigurationId: 0,
            host: "",
            id: 0,
            protocol: "ws://",
            identifier: ""
        });
        onSuccess();
        if (dialogRef.current) dialogRef.current.close();
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const resultSchema = await FormLeverWebsocketSchema.safeParseAsync(formData);
        if (resultSchema.error) {
            console.error(`Erro ao validar dados: ${resultSchema.error}`);
            return;
        }
        const { host, protocol,identifier } = resultSchema.data;
        if (configuration?.leverWebsocketConfiguration) {
            const leverWebsocket = new LeverWebsocketConfiguration();
            leverWebsocket.id = configuration.leverWebsocketConfiguration.id;
            leverWebsocket.host = host;
            leverWebsocket.protocol = protocol as "ws://" | "wss://";
            leverWebsocket.identifier = identifier;
            leverWebsocket.dataConfigurationId = configuration.leverWebsocketConfiguration.dataConfigurationId;
            const dataConfiguration = new DataConfiguration();
            dataConfiguration.id = configuration.leverWebsocketConfiguration.dataConfigurationId;
            dataConfiguration.configurationId = configurationId;
            if(projectId) dataConfiguration.projectId = projectId;
            if(configurationProjectId) dataConfiguration.configurationProjectId = configurationProjectId;
            dataConfiguration.leverWebsocketConfiguration = leverWebsocket;
            const response = await updateDataConfiguration(componentKey, dataConfiguration);
            alert(response.data);
        } else {
            const leverWebsocket = new LeverWebsocketConfiguration();
            leverWebsocket.host = host;
            leverWebsocket.protocol = protocol as "ws://" | "wss://";
            leverWebsocket.identifier = identifier;
            const dataConfiguration = new DataConfiguration();
            dataConfiguration.configurationId = configurationId;
            if(projectId) dataConfiguration.projectId = projectId;
            if(configurationProjectId) dataConfiguration.configurationProjectId = configurationProjectId;
            dataConfiguration.leverWebsocketConfiguration = leverWebsocket;
            const response = await addDataConfiguration(componentKey, dataConfiguration);
            alert(response.data);
        }
        closeDialog();
        setIsLoading(false);
    }
    return (
        <Dialog
            className="w-full max-w-md"
            ref={dialogRef}
        >
            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="font-bold text-2xl">{configuration?.leverWebsocketConfiguration ? "Atualizar configuração" : "Salvar configuração"}</CardTitle>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className=" space-y-4 ">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm" htmlFor="">Identificador</label>
                            <Input
                                placeholder="Informe o identificador do interruptor"
                                value={formData.identifier}
                                onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                            />
                            <label className="text-sm" htmlFor="">Host</label>
                            <Input
                                placeholder="Informe o host de conexão"
                                value={formData.host}
                                onChange={(e) => setFormData({ ...formData, host: e.target.value })}
                            />
                            <label className="text-sm" htmlFor="">Protocolo de conexão</label>
                            <Select
                                onChange={(e) => setFormData({ ...formData, protocol: e.target.value as "ws://" | "wss://" })}
                                value={formData.protocol}>
                                <Option value={""}>Selecione o protocolo</Option>
                                <Option value={"ws://"}>ws://</Option>
                                <Option value={"wss://"}>wss://</Option>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-3 justify-end">
                            <Button
                                type="button"
                                className="bg-secondary border hover:cursor-pointer"
                                onClick={() => closeDialog()}
                            >
                                Cancelar
                            </Button>
                            <Button
                                className="bg-primary hover:cursor-pointer"
                            >
                                {isLoading
                                    ? configuration?.leverWebsocketConfiguration
                                        ? "Atualizando..."
                                        : "Criando..."
                                    : configuration?.leverWebsocketConfiguration
                                        ? "Atualizar configuração"
                                        : "Adicionar configuração"}

                            </Button>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </Dialog>
    )
}