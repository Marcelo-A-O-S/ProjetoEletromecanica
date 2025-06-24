import { Pencil, Play, Settings, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";
import { deleteProjectById } from "@/services/projectServices";

interface Project {
    id: number;
    name: string;
    description: string;
}
interface ProjectCardProps{
    project : Project 
    onDelete:(id:number)=>void;
    onEdit: (project: Project) => void;
}
function ProjectCard({ project, onDelete, onEdit }: ProjectCardProps) {
    const router = useRouter();
    
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="font-bold text-2xl">{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </div>
                    <div className="flex">
                        <Button onClick={()=>onEdit(project)} className="bg-secondary hover:cursor-pointer">
                            <Pencil />
                        </Button>
                        <Button 
                        onClick={()=> onDelete(project.id)}
                        className="bg-secondary hover:cursor-pointer">
                            <Trash2 />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">

            </CardContent>
            <CardFooter className="flex items-end">
                <div className="flex justify-between w-full h-full items-end">
                    <Button
                        onClick={()=> router.push(`/dashboard/project/configuration/${project.id}`)}
                        className="bg-secondary flex items-center hover:cursor-pointer">
                        <Settings />
                        Configurações
                    </Button>
                    <Button
                        className="bg-primary flex items-center hover:cursor-pointer">
                        <Play />
                        Executar
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
export {
    ProjectCard
}