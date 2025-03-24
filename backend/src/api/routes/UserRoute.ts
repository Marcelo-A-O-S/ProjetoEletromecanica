import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { Authenticate } from "../controllers/middlewares/Authenticate";
import { Authorize } from "../controllers/middlewares/Authorize";
const UserRoute = () =>{
    const userRoute = Router();
    const userController = new UserController();
    userRoute.post("/addUser",Authenticate,Authorize(["admin"]), userController.Save);
    userRoute.put("/updateUser",Authenticate,Authorize(["admin"]), userController.Update);
    userRoute.get("/listUsers",Authenticate,Authorize(["admin"]), userController.ListAll);
    userRoute.get("/getUserById",Authenticate,Authorize(["admin"]), userController.GetById);
    userRoute.get("/findUsersByRole",Authenticate,Authorize(["admin"]), userController.FindByRoles);
    userRoute.get("/findUserByEmail",Authenticate,Authorize(["admin"]), userController.FindByEmail);
    userRoute.delete("/deleteUser",Authenticate,Authorize(["admin"]), userController.Delete);
    userRoute.delete("/deleteUserById",Authenticate,Authorize(["admin"]), userController.DeleteById);
    return userRoute;
}
export {UserRoute}