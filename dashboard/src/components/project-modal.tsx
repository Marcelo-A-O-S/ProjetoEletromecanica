"use client"
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Dialog } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { TextArea } from "./ui/text-area";
import { addProject, updateProject } from "@/services/projectServices";
import { z } from "zod";
import { IProject } from "@/domain/interfaces/IProject";

interface ProjectModalProps {
    project: IProject | null;
    onSuccess:()=>void;
}
const ProjectSchema = z.object({
    name: z.string(),
    description: z.string()
})
export function ComponentProjectModal({ project, onSuccess }: ProjectModalProps) {
    const [formData, setFormData] = useState<IProject>(
        project ? {
            description: project.description,
            name: project.name,
            id: project.id
        } : {
            description: '',
            id: 0,
            name: ''
        }
    )
    useEffect(() => {
        if (project) {
            setFormData(project);
            openDialog();
        }
    }, [project])
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    }
    const closeDialog = () => {
        setFormData({
            description: '',
            id: 0,
            name: ''
        })
        if (dialogRef.current) dialogRef.current.close();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const resultSchema = await ProjectSchema.safeParseAsync(formData);
        if(resultSchema.error){
            console.error("Erro nas informações relatadas", resultSchema.error)
            return;
        }
        const {description, name} = resultSchema.data;
        if(project){
            const response = await updateProject(project.id,name, description);
            if(response.status == 400 || response.status === 401 || response.status === 500){
                console.error("Erro ao realizar atualização do projeto: ", response.data);
                return;
            }
            alert("Projeto atualizado com sucesso!");
        }else{
            const response = await addProject(name, description);
            if(response.status == 400 || response.status === 401 || response.status === 500){
                console.error("Erro ao realizar cadastro do projeto: ", response.data);
                return;
            }
            alert("Projeto cadastrado com sucesso!");
        }
        
        closeDialog();
        setIsLoading(false);
        onSuccess();
    }
    return (
        <div>
            <Button onClick={openDialog} className="flex items-center gap-1 bg-primary hover:bg-primary/90 hover:cursor-pointer">
                <Plus />
                Novo projeto
            </Button>
            <Dialog
                className="w-full max-w-md"
                ref={dialogRef}>
                <Card className="">
                    <CardHeader className="space-y-1">
                        <CardTitle className="font-bold text-2xl">{project ? "Atualizar Projeto" : "Adicionar Projeto"}</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleSubmit} >
                        <CardContent className=" space-y-4 ">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm" htmlFor="">Nome projeto</label>
                                <Input
                                    className="w-full"
                                    placeholder="Informe o nome do projeto"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <label className="text-sm" htmlFor="">Descrição do projeto</label>
                                <TextArea
                                    placeholder="Descrição breve do projeto"
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
                                        ? project
                                            ? "Atualizando..."
                                            : "Criando..."
                                        : project
                                            ? "Atualizar projeto"
                                            : "Criar projeto"}

                                </Button>
                            </div>
                        </CardFooter>
                    </form>

                </Card>
            </Dialog>
        </div>

    )
}