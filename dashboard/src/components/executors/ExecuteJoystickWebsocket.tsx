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
    const socketRef = useRef<WebSocket | null>(null);
    const [isStarting, setIsStarting] = useState(false);
    const [data, setData] = useState<IJoystickWebsocketConfiguration>(
        dataConfiguration.joystickWebSocketConfiguration ? {
            host: dataConfiguration.joystickWebSocketConfiguration.host,
            id: dataConfiguration.joystickWebSocketConfiguration.id,
            protocol: dataConfiguration.joystickWebSocketConfiguration.protocol,
            dataConfigurationId: dataConfiguration.joystickWebSocketConfiguration.dataConfigurationId
        } : {
            dataConfigurationId: 0,
            host: "",
            id: 0,
            protocol: "ws://"
        }
    )
    useEffect(() => {
        loadingConnection()
        console.log(data)
    }, [])
    const loadingConnection = async () => {
        if (data.host == "") {
            console.error("Host de conexão não informado!");
            return;
        }
        console.log(data);
        socketRef.current = new WebSocket(`${data.protocol}${data.host}`);
        socketRef.current.onopen = () => {
            console.log('Conectado ao WebSocket');
            setIsStarting(true)
            
        };
        socketRef.current.onmessage = (event) => {
            console.log('Mensagem recebida:', event.data);
        };

    }
    const handleMove = (event: IJoystickUpdateEvent) => {
        console.log('Movimento:', event.direction);
        const dados = {
            direction: event.direction
        }
        socketRef.current?.send(JSON.stringify(dados));
    };

    const handleStop = () => {
        const dados = {
            direction: "STOP"
        }
        socketRef.current?.send(JSON.stringify(dados));
    };
    const closeConnection = async () => {
        socketRef.current?.close();
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
                            <CardDescription>{isStarting?"Conectado": "Conectando..."}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                    <Joystick
                        size={100}
                        baseColor="gray"
                        stickColor="black"
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