import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import { Input } from "../ui/input";
import { IJoystickWebsocketConfiguration } from "@/domain/interfaces/IJoystickWebsocketConfiguration";
import { Select,Option } from "../ui/select";
import { z } from "zod";
import { DataConfiguration } from "@/domain/models/DataConfiguration";
import { JoystickWebSocketConfiguration } from "@/domain/models/JoystickWebsocketConfiguration";
import { addDataConfiguration, updateDataConfiguration } from "@/services/dataConfigurationServices";
import { IDataConfiguration } from "@/domain/interfaces/IDataConfiguration";
interface FormJoystickWebsocketProps{
    configuration: IDataConfiguration,
    configurationId: number,
    componentKey:string,
    onSuccess: ()=> void
}
const FormJoystickWebsocketSchema = z.object({
    host: z.string(),
    protocol: z.string()
})
export default function FormJoystickWebsocket({configuration,configurationId, componentKey, onSuccess}: FormJoystickWebsocketProps){
    const [ isLoading, setIsLoading] = useState(false);
    const [formData , setFormData ] = useState<IJoystickWebsocketConfiguration>(
        configuration.joystickWebSocketConfiguration?{
            dataConfigurationId: configuration.joystickWebSocketConfiguration.dataConfigurationId,
            host: configuration.joystickWebSocketConfiguration.host,
            id: configuration.joystickWebSocketConfiguration.id,
            protocol: configuration.joystickWebSocketConfiguration.protocol
        }:{
            dataConfigurationId: 0,
            host: "",
            id: 0,
            protocol: "ws://"
        }
    )
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    useEffect(()=>{
        openDialog();
        console.log(configuration)
    },[])
    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    }
    const closeDialog = () => {
        setFormData({
            dataConfigurationId: 0,
            host: "",
            id: 0,
            protocol: "ws://"
        });
        onSuccess();
        if (dialogRef.current) dialogRef.current.close();
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setIsLoading(true);
        const resultSchema = await FormJoystickWebsocketSchema.safeParseAsync(formData);
        if(resultSchema.error){
            console.error(`Erro ao validar dados: ${resultSchema.error}`);
            return;
        }
        const {host,protocol} = resultSchema.data;
        if(configuration.joystickWebSocketConfiguration){
            const joystickWebsocket = new JoystickWebSocketConfiguration();
            joystickWebsocket.id = configuration.joystickWebSocketConfiguration.id;
            joystickWebsocket.host = host;
            joystickWebsocket.protocol = protocol as "ws://" | "wss://";
            joystickWebsocket.dataConfigurationId = configuration.joystickWebSocketConfiguration.dataConfigurationId;
            const dataConfiguration = new DataConfiguration();
            dataConfiguration.id = configuration.joystickWebSocketConfiguration.dataConfigurationId;
            dataConfiguration.configurationId = configurationId;
            dataConfiguration.joystickWebsocketConfiguration = joystickWebsocket;
            const response = await updateDataConfiguration(componentKey, dataConfiguration);
            alert(response.data);
        }else{
            const joystickWebsocket = new JoystickWebSocketConfiguration();
            joystickWebsocket.host = host;
            joystickWebsocket.protocol = protocol as "ws://" | "wss://";
            const dataConfiguration = new DataConfiguration();
            dataConfiguration.configurationId = configurationId;
            dataConfiguration.joystickWebsocketConfiguration = joystickWebsocket;
            const response = await addDataConfiguration(componentKey, dataConfiguration);
            alert(response.data);
        }
        closeDialog();
        setIsLoading(false);
    }
    return(
        <Dialog
            className="w-full max-w-md"
            ref={dialogRef} 
            >
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="font-bold text-2xl">{configuration.joystickWebSocketConfiguration?"Atualizar configuração": "Salvar configuração"}</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                    <CardContent className=" space-y-4 ">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm" htmlFor="">Host</label>
                            <Input
                                placeholder="Informe o host de conexão"
                                value={formData.host}
                                onChange={(e)=> setFormData({...formData,host: e.target.value})}
                            />
                            <label className="text-sm" htmlFor="">Protocolo de conexão</label>
                            <Select 
                            onChange={(e)=>setFormData({...formData, protocol: e.target.value as "ws://" | "wss://"})}
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
                                onClick={()=>closeDialog()}
                            >
                                Cancelar
                            </Button>
                            <Button
                                className="bg-primary hover:cursor-pointer"
                            >
                                {isLoading
                                    ? configuration.joystickWebSocketConfiguration
                                        ? "Atualizando..."
                                        : "Criando..."
                                    : configuration.joystickWebSocketConfiguration
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