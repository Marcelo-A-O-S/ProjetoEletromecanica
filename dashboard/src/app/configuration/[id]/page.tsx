"use client"
import { ConfigurationProjectModal } from "@/components/configurationProject-modal";
import { IProject } from "@/domain/interfaces/IProject";
import { ConfigurationProject } from "@/domain/models/ConfigurationProject";
import { getProjectById } from "@/services/projectServices";
import React from "react";
import { useEffect, useState } from "react";


export default function ConfigurationProjectPage({
    params,
  }: {
    params: { id: number }
  }){
    const [configurationProjectSelected, setConfigurationProjectSelected] = useState<ConfigurationProject| null>(null);
    const [project, setProject]= useState<IProject>();
    const [projectId, setProjectId] = useState(0);
    const { id } = params;
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
            console.log(response.data);
        }
        
    }
    const OnSuccess = async() =>{
        await loadingData()
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
            <div id="content" className="flex flex-col pt-5">
                <div id="dataProject">
                    <h1 className="text-2xl font-medium">{project?.name}</h1>
                    <p>{project?.description}</p>
                </div>
                <div id="cards">
                    
                </div>
            </div>
            
        </main>
    )
}