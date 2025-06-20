import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Joystick } from "react-joystick-component";
import { Button } from "../ui/button";
import { IDataConfiguration } from "@/domain/interfaces/IDataConfiguration";
import { useEffect, useRef, useState } from "react";
import { IJoystickWebsocketConfiguration } from "@/domain/interfaces/IJoystickWebsocketConfiguration";
import { Pause } from "lucide-react";
import { IConfiguration } from "@/domain/interfaces/IConfiguration";

interface ExecuteJoystickWebsocketProps {
    configuration: IConfiguration,
    dataConfiguration: IDataConfiguration,
    onSuccess: ()=> void
}
export default function ExecuteJoystickWebsocket({ configuration,dataConfiguration, onSuccess }: ExecuteJoystickWebsocketProps) {
    const [manualClose, setManualClose] = useState(false);
    const isSendingRef = useRef(false);
    const [connectionAttempts, setConnectionttempts] = useState(0);
    const socketRef = useRef<WebSocket | null>(null);
    const lastDirection = useRef<string | null>(null);
    const [isStarting, setIsStarting] = useState(false);
    const [data, setData] = useState<IJoystickWebsocketConfiguration>(
        dataConfiguration?.joystickWebsocketConfiguration ? {
            host: dataConfiguration.joystickWebsocketConfiguration.host,
            id: dataConfiguration.joystickWebsocketConfiguration.id,
            protocol: dataConfiguration.joystickWebsocketConfiguration.protocol,
            dataConfigurationId: dataConfiguration.joystickWebsocketConfiguration.dataConfigurationId,
            identifier: dataConfiguration.joystickWebsocketConfiguration.identifier
        } : {
            dataConfigurationId: 0,
            host: "",
            id: 0,
            protocol: "ws://",
            identifier:""
        }
    )
    useEffect(() => {
        setConnectionttempts(0);
        loadingConnection();
    }, [])

    const loadingConnection = async () => {
        if (data.host == "") {
            console.error("Host de conexão não informado!");
            return;
        }
        console.log(data);
        socketRef.current = new WebSocket(`${data.protocol}${data.host}`);
        socketRef.current.onopen = () => {
            console.log(`Conectado ao WebSocket em ${data.protocol}${data.host}`);
            console.log(`Identificador: ${data.identifier}`);
            setIsStarting(true);
            setManualClose(false);
            
        };
        socketRef.current.onerror = (error)=>{
            console.error("Websocket error: ",error);
            //socketRef.current?.close();
        }
        socketRef.current.onmessage = (event) => {
            console.log('Mensagem recebida:', event.data);
        };
        socketRef.current.onclose = () => {
            console.warn("WebSocket desconectado.");
            setIsStarting(false);
        
            if (!manualClose && connectionAttempts < 5) {
                console.warn("Tentando reconectar...");
                setConnectionttempts(connectionAttempts+1);
                setTimeout(() => {
                    loadingConnection(); // Rechama a função para tentar reconectar
                }, 2000);
            } else {
                console.log("Numero maximo de tentativas alcancado.");
            }
        };
        

    }
    const handleMove = (event: IJoystickUpdateEvent) => {
        if(!isSendingRef.current ){
            isSendingRef.current = true;
            
            console.log('Enviando movimento:', event.direction);
            const dados = {
                direction: event.direction
            }
            sendMessage(dados);
            setTimeout(() => {
                isSendingRef.current = false;
            }, 200);
        }
        
    };
    const sendMessage = (dados: any) => {
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify(dados));
        } else {
            console.warn("WebSocket não está pronto para enviar.");
        }
    };
    const handleStop = () => {
        const dados = {
            [data.identifier]: "STOP"
        }
        sendMessage(dados);
    };
    const closeConnection = async () => {
        setManualClose(true); 
        if (socketRef.current) {
            socketRef.current.close(); // Fecha a conexão de WebSocket
        }
        console.log('Conexão WebSocket fechada');
        setIsStarting(false)
        onSuccess();
    }
    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-2">
                        <div>
                            <CardTitle className="font-bold text-2xl">{configuration.name}</CardTitle>
                            <CardDescription>{configuration.description}</CardDescription>
                        </div>
                        <div className="flex w-full justify-end">
                            <CardDescription
                             className={isStarting ? "text-green-500" : "text-yellow-500"}
                            >{isStarting?"Conectado": "Conectando..."}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                    <Joystick
                        size={100}
                        baseColor="gray"
                        stickColor="yellow"
                        move={handleMove}
                        stop={handleStop}
                    />
                </CardContent>
                <CardFooter>
                    <div className="flex justify-between w-full h-full items-end">
                        <Button
                            onClick={()=> closeConnection()}
                            className="bg-secondary flex items-center hover:cursor-pointer">
                            <Pause />
                            Stop
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}