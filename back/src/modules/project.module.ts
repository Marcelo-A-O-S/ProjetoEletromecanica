import { Module } from "@nestjs/common";
import { ProjectController } from "../presentation/controllers/project.controller";
import { ProjectRepository } from "../repositories/implements/project.repository";
import { ProjectServices } from "../services/implements/project.service";
import { AuthModule } from "./auth.module";

@Module({
    controllers:[ProjectController],
    providers:[ProjectServices, ProjectRepository],
    exports:[ProjectServices],
    imports:[AuthModule]
})

export class ProjectModule{}