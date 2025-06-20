'use client'
import { ProjectCard } from "@/components/project-card";
import { ComponentProjectModal } from "@/components/project-modal";
import { IProject } from "@/domain/interfaces/IProject";
import { deleteProjectById, getProjects } from "@/services/projectServices";
import { useEffect, useState } from "react";
export default function Home() {
  const [projects, setProjects] = useState([]);
  const [projectSelected, setProjectSelected] = useState<IProject | null>(null);
  useEffect(() => {
    loadingData();
  }, [])
  const loadingData = async () => {
    const response = await getProjects();
    if (response.status == 400 || response.status === 401 || response.status === 500) {
      console.error("Erro ao listar projetos: ", response.data);
      return;
    }
    setProjects(response.data);
  }
  const onSuccess = () => {
    if(projectSelected){
      setProjectSelected(null);
    }
    loadingData();
  }
  const EditProject = async (project: IProject) => {
    setProjectSelected(project);
  }
  const DeleteProject = async (id: number) => {
    console.log("Deletando projeto: ", id);
    const response = await deleteProjectById(id);
    console.log(response)
    if (response.status == 400 || response.status === 401 || response.status === 500) {
      console.error("Erro ao deletar projeto: ", response.data);
      return;
    }
    if(response.status == 200 || response.status == 201){
      alert(response.data)
    }
    loadingData();
  }

  return (
    <main className="flex-1 mx-auto container py-6">

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <ComponentProjectModal
            onSuccess={onSuccess}
            project={projectSelected}
          />
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, key) => (
            <ProjectCard
              onEdit={EditProject}
              onDelete={DeleteProject}
              project={project} />))}
        </div>
      </div>

    </main>
  );
}
