import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog } from "./ui/dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { TextArea } from "./ui/text-area";
import { getConfigurations } from "@/services/configurationServices";
import { Select , Option} from "./ui/select";

import { z } from "zod";
import { addConfigurationProject } from "@/services/configurationProjectServices";
import { IConfiguration } from "@/domain/interfaces/IConfiguration";
import { IConfigurationProject } from "@/domain/interfaces/IConfigurationProject";

interface ConfigurationProjectModalProps{
    configuration: IConfigurationProject | null;
    projectId: number,
    onSuccess: () => void;
}
const configurationProjectSchema = z.object({
    id: z.number(),
    configurationId: z.number().min(1,{message:"Selecione o tipo de configuração corretamente!"}),
    description: z.string()
})
export function ConfigurationProjectModal({configuration,projectId,onSuccess}: ConfigurationProjectModalProps){
    const [isLoading, setIsLoading]= useState(false);
    const [configurations, setConfigurations] = useState<IConfiguration[]>([]);
    const [configurationProject, setConfigurationProject] = useState<IConfigurationProject>(
        configuration?{
            description: configuration.description,
            id: configuration.id,
            configurationId: configuration.configurationId,
            
        }:{
            description: '',
            id: 0,
            configurationId: 0
        }
    )
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    useEffect(()=>{
        loadingConfigurations()
    },[])
    const loadingConfigurations = async () =>{
        const response = await getConfigurations();
        if (response.status == 400 || response.status === 401 || response.status === 500) {
            console.error("Erro ao listar projetos: ", response.data);
            return;
          }
        console.log(response.data);
        setConfigurations(response.data);
    }
    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    }
    const closeDialog = () => {
        setConfigurationProject({
            configurationId: 0,
            description: "",
            id: 0,
        })
        if (dialogRef.current) dialogRef.current.close();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            const resultSchema = await configurationProjectSchema.safeParseAsync(configurationProject);
            if(resultSchema.error){
                console.error("Erro de validação: ", resultSchema.error);
                return;
            }
            const {description,configurationId} = resultSchema.data;
            if(configuration){
                console.log({description,projectId, configurationId})
            }else{
                addConfigurationProject(projectId,configurationId,description);
                alert("Configuração vinculada com sucesso!");
            }
            closeDialog();
            setIsLoading(false);
            onSuccess();
        }catch(e){
            console.error("Erro ao realizar procedimento de cadastro/atualização: ", e)
        }
    }
    return(
        <div>
            <Button onClick={openDialog} className="flex items-center gap-1 bg-primary hover:bg-primary/90 hover:cursor-pointer">
                <Plus/>
                Adicionar configuração
            </Button>
            <Dialog
            className="w-full max-w-md"
            ref={dialogRef}
            >
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="font-bold text-2xl">{configuration? "Atualizar configuração":"Cadastrar configuração"}</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                    <CardContent className=" space-y-4 ">
                    <div className="flex flex-col space-y-2">
                                <Select 
                                name="project"
                                value={configurationProject.configurationId}
                                onChange={(e)=>setConfigurationProject({...configurationProject, configurationId: parseInt(e.target.value)})}
                                >
                                    <Option value="0">Selecione o tipo de projeto</Option>
                                    {configurations.map((configurationData)=>(
                                        <Option value={configurationData.id}>{configurationData.name}</Option>
                                    ))}
                                </Select>
                                
                                <label className="text-sm" htmlFor="">Descrição da utilidade da configuração</label>
                                <TextArea
                                    value={configurationProject?.description}
                                    placeholder="Descrição breve..."
                                    onChange={(e)=> setConfigurationProject({...configurationProject,description: e.target.value})}
                                />
                            </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-3 justify-end">
                        <Button
                                    type="button"
                                    className="bg-secondary border hover:cursor-pointer"
                                    onClick={closeDialog}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    className="bg-primary hover:cursor-pointer"
                                >
                                     {isLoading
                                        ? configuration
                                            ? "Atualizando..."
                                            : "Criando..."
                                        : configuration
                                            ? "Atualizar configuração"
                                            : "Adicionar configuração"}

                                </Button>
                        </div>
                    </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </div>
    )
} 