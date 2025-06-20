"use client"
import { ConfigurationProjectModal } from "@/components/configurationProject-modal";
import { IConfiguration } from "@/domain/interfaces/IConfiguration";
import { IProject } from "@/domain/interfaces/IProject";
import { ConfigurationProject } from "@/domain/models/ConfigurationProject";
import { getProjectById } from "@/services/projectServices";
import React from "react";
import { useEffect, useState } from "react";
import { ConfigurationProjectCard } from "@/components/configurationProject-card";
type ConfigurationProjectProps ={
    id: number;
}

export default function ConfigurationProjectPage({ id}: ConfigurationProjectProps){
    const [configurationProjectSelected, setConfigurationProjectSelected] = useState<ConfigurationProject| null>(null);
    const [project, setProject]= useState<IProject>();
    const [projectId, setProjectId] = useState(0);
    useEffect(()=>{
        loadingData();
    },[])
    const loadingData= async()=>{
        const projectId = Number(id);
        if(projectId){
            const response = await getProjectById(projectId);
            setProjectId(projectId)
            if(response.status == 400 || response.status == 401 || response.status == 500){
                console.log("Erro ao buscar projeto: ",response.data);
            }
            setProject(response.data);
            console.log("Projeto: ",response.data);
        }
        
    }
    const OnSuccess = async() =>{
        await loadingData()
    }
    const onDelete =(id:number)=>{

    }
    const onUpdate =(configuration:IConfiguration)=>{

    }
    
    return(
        <main className="flex-1 mx-auto container py-6 ">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Configuração do Projeto</h1>
                    <ConfigurationProjectModal 
                    onSuccess={OnSuccess}
                    projectId={projectId}
                    configuration={configurationProjectSelected}/>
                </div>
            </div>
            <div id="content" className="flex flex-col pt-5 space-y-6" >
                <div id="dataProject" >
                    <h1 className="text-2xl font-medium">{project?.name}</h1>
                    <p>{project?.description}</p>
                </div>
                <div id="cards" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" >
                    {project?.configurationsProjects?.map((configurationProject)=>{
                        return configurationProject.configuration? (<ConfigurationProjectCard
                            configuration={configurationProject.configuration}
                            configurationProject={configurationProject}
                            onSuccess={OnSuccess}
                            onDelete={onDelete}
                            onEdit={onUpdate}
                            projectId={projectId}
                        />):(<></>)
                    })}
                </div>
            </div>
            
        </main>
    )
}