import { Router } from "express"
import { ConfigurationProjectController } from "../controllers/ConfigurationProjectController"
import { Authorize } from "../controllers/middlewares/Authorize";
import { Authenticate } from "../controllers/middlewares/Authenticate";


const ConfigurationProjectRoute = () =>{
    const configurationProjectRoute = Router()
    const configurationProjectController = new ConfigurationProjectController();
    configurationProjectRoute.post("/add",Authenticate,Authorize(["admin","operator","user"]),configurationProjectController.Save);
    configurationProjectRoute.get("/all",Authenticate, Authorize(["admin","operator","user"]), configurationProjectController.ListAll);
    return configurationProjectRoute;
}
export {
    ConfigurationProjectRoute
}