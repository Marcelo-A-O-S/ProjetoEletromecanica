"use client"
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog } from "./ui/dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useRef, useState } from "react";
import { TextArea } from "./ui/text-area";
import { Input } from "./ui/input";
import { z } from "zod";
import { addConfiguration, updateConfiguration } from "@/services/configurationServices";
import { IConfiguration } from "@/domain/interfaces/IConfiguration";
export interface ConfigurationModalProps {
    configuration: IConfiguration | null;
    onSuccess:()=>void;
}
const ConfigurationSchema = z.object({
    name: z.string(),
    description: z.string(),
    componentKey: z.string().nonempty()
})
export function ConfigurationModal({ configuration, onSuccess }: ConfigurationModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<IConfiguration>(
        configuration ?{
            description: configuration.description,
            name: configuration.name,
            componentKey: configuration.componentKey,
            id: configuration.id,
        } : {
            description: "",
            id: 0,
            name: "",
            componentKey: "",
        }
    );
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    useEffect(()=>{
        if(configuration){
            setFormData(configuration);
            openDialog();
        }
    },[configuration])
    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    }
    const closeDialog = () => {
        setFormData({
            description: '',
            id: 0,
            name: '',
            componentKey:''
        })
        if (dialogRef.current) dialogRef.current.close();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setIsLoading(true);
        const resultSchema = await ConfigurationSchema.safeParseAsync(formData);
        if(resultSchema.error){
            console.error("Erro, dados inválidos, corrija e tente novamente! Erro:", resultSchema.error);
            return;
        }
        const {description,name,componentKey} = resultSchema.data;
        if(configuration){
            const response = await updateConfiguration(configuration.id,name, description,componentKey);
            if(response.status == 400 || response.status === 401 || response.status === 500){
                console.error("Erro ao realizar atualização da configuração: ", response.data);
                return;
            }
            alert("Configuração atualizada com sucesso!");

        }else{
            const response = await addConfiguration(name,description, componentKey);
            if(response.status == 400 || response.status === 401 || response.status === 500){
                console.error("Erro ao realizar o cadastro da configuração: ", response.data);
                return;
            }
            alert("Configuração cadastrada com sucesso!");
        }
        closeDialog();
        setIsLoading(false);
        onSuccess();
    }
    return (
        <div>
            <Button onClick={openDialog} className="flex items-center gap-1 bg-primary hover:bg-primary/90 hover:cursor-pointer">
                <Plus />
                Nova configuração
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
                            <label className="text-sm" htmlFor="">Nome</label>
                            <Input
                                placeholder="Nome da configuração"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <label className="text-sm" htmlFor="">Chave do componente</label>
                            <Input
                                placeholder="Chave única do componente"
                                value={formData.componentKey}
                                onChange={(e) => setFormData({ ...formData, componentKey: e.target.value })}
                            />
                            <label className="text-sm" htmlFor="">Descrição</label>
                            <TextArea
                                placeholder="Descrição breve da configuração"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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