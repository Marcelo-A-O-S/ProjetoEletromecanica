import { Router } from "express"
import { ConfigurationController } from "../controllers/ConfigurationController";
import { Authenticate } from "../controllers/middlewares/Authenticate";
import { Authorize } from "../controllers/middlewares/Authorize";

const ConfigurationRoute = () => {
    const configurationRoute = Router();
    const configurationController = new ConfigurationController();
    configurationRoute.get("/all",Authenticate, Authorize(["admin", "user","operator"]), configurationController.ListAll);
    configurationRoute.post("/add",Authenticate, Authorize(["admin", "user", "operator"]), configurationController.Save);
    configurationRoute.get("/getById",Authenticate, Authorize(["admin", "user", "operator"]), configurationController.GetById);
    configurationRoute.put("/update",Authenticate, Authorize(["admin", "user","operator"]),configurationController.Update);
    configurationRoute.delete("/delete",Authenticate, Authorize(["admin", "user", "operator"]),configurationController.Delete);
    configurationRoute.delete("/deleteById",Authenticate, Authorize(["admin","user","operator"]),configurationController.DeleteById);
    return configurationRoute;
}
export {
    ConfigurationRoute
}