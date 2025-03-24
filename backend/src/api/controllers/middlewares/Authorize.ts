import { NextFunction ,Response, Request} from "express";
import { getAuthUser } from "../../contexts/authContext";
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_change_this_in_production";
export const Authorize =  (roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if(!token){
            res.status(401).json({message:"Acesso negado. Token não fornecido."});
            return;
        }
        const userRole = getAuthUser(token);
        
        if (!userRole || !roles.includes(userRole.role)) {
            res.status(403).json({ message: "Acesso negado. Permissão insuficiente." });
            return;
        }
        next();
    };
};