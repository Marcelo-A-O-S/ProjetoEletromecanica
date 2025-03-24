import { Router } from "express"
import { ProjectController } from "../controllers/ProjectController";
import { Authenticate } from "../controllers/middlewares/Authenticate";
import { Authorize } from "../controllers/middlewares/Authorize";
const ProjectRoute = () => {
    const projectRoute = Router();
    const projectController = new ProjectController();
    projectRoute.post("/add", Authenticate, Authorize(["admin", "operator","user"]), projectController.Save);
    projectRoute.put("/update", Authenticate, Authorize(["admin", "operator","user"]), projectController.Update);
    projectRoute.get("/all", Authenticate, Authorize(["admin", "operator","user"]), projectController.ListAll);
    projectRoute.get("/getById", Authenticate, Authorize(["admin", "operator","user"]), projectController.GetById);
    projectRoute.delete("/delete", Authenticate, Authorize(["admin", "operator","user"]), projectController.Delete);
    projectRoute.delete("/deleteById", Authenticate, Authorize(["admin", "operator","user"]), projectController.DeleteById);
    return projectRoute;
}
export { ProjectRoute }