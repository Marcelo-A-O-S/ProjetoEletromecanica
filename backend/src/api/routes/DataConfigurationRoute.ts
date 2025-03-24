import { Router } from "express"
import { DataConfigurationController } from "../controllers/DataConfigurationController";
import { Authenticate } from "../controllers/middlewares/Authenticate";
import { Authorize } from "../controllers/middlewares/Authorize";

const DataConfigurationRoute = () =>{
    const dataConfigurationRoute = Router();
    const dataConfigurationController = new DataConfigurationController();
    dataConfigurationRoute.post("/add",Authenticate, Authorize(["admin", "operator", "user"]), dataConfigurationController.Save);
    dataConfigurationRoute.put("/update", Authenticate, Authorize(["admin","operator","user"]),dataConfigurationController.Update);
    return dataConfigurationRoute;
}

export {
    DataConfigurationRoute
}