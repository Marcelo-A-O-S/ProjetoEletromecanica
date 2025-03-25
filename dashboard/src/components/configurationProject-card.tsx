import { Pencil, Play, Settings, Trash2 } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { selectComponent, selectExecutor } from "@/utils/componentMap";
import { useEffect, useState } from "react";
import { IConfiguration } from "@/domain/interfaces/IConfiguration";
import { IConfigurationProject } from "@/domain/interfaces/IConfigurationProject";

interface ConfigurationProjectCardProps{
    configurationProject?: IConfigurationProject;
    configuration: IConfiguration;
    onDelete: (id:number)=>void;
    onEdit: (configuration: IConfiguration) => void;
    onSuccess: ()=> void;
    
}
export function ConfigurationProjectCard({configurationProject,configuration,onDelete,onEdit, onSuccess}: ConfigurationProjectCardProps){
    const [ModalComponent, setModalComponent] = useState<React.ElementType | null>(null);
    const [ExecuteComponent, setExecuteComponent] = useState<React.ElementType | null>(null);
    const selectComponentDynamic = async(key:string) =>{
        const Component = selectComponent(key);
        setModalComponent(()=>Component);
    }
    const selectExecutorDynamic = async(key:string )=>{
        const Executor = selectExecutor(key);
        setExecuteComponent(()=>Executor);
    }
    const OnSuccess = ()=>{
        onSuccess();
        setExecuteComponent(null);
        setModalComponent(null);
    }
    return ExecuteComponent? (
        <>
        <ExecuteComponent 
        onSuccess={OnSuccess}
        configuration={configuration}
        dataConfiguration={configuration.dataConfigurations?.find(x=> x.configurationId == configuration.id && x.projectId == null)}/>
        </>
    )
    :(
        <>
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="font-bold text-2xl">{configuration.name}</CardTitle>
                        <CardDescription>{configuration.description}</CardDescription>
                    </div>
                    <div className="flex">
                        <Button onClick={()=>onEdit(configuration)} className="bg-secondary hover:cursor-pointer">
                            <Pencil />
                        </Button>
                        <Button 
                        onClick={()=> onDelete(configuration.id)}
                        className="bg-secondary hover:cursor-pointer">
                            <Trash2 />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <CardDescription>{configurationProject?configurationProject.description:""}</CardDescription>
            </CardContent>
            <CardFooter className="flex items-end">
                <div className="flex justify-between w-full h-full items-end">
                    <Button
                        onClick={()=>selectComponentDynamic(configuration.componentKey? configuration.componentKey: "formDefault")}
                        className="bg-secondary flex items-center hover:cursor-pointer">
                        <Settings />
                        Configurações
                    </Button>
                    <Button
                        onClick={()=>selectExecutorDynamic(configuration.componentKey? configuration.componentKey: "formDefault")}
                        className="bg-primary flex items-center hover:cursor-pointer">
                        <Play />
                        Testar
                    </Button>
                </div>
            </CardFooter>
        </Card>
        {ModalComponent ? <ModalComponent 
        componentKey={configuration.componentKey}
        configuration={configuration.dataConfigurations?.find(x=> x.configurationId == configuration.id && x.projectId == null)} 
        configurationId={configuration.id}
        onSuccess={OnSuccess}
        /> : null}
        </>
    )
}