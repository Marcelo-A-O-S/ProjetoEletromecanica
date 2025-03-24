import { Response, Request, NextFunction } from "express"
import jwt from "jsonwebtoken";
import { UserServices } from "../../services/UserServices";
import { setAuthUser } from "../../contexts/authContext";
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_change_this_in_production";
export const Authenticate = async (req: Request, res: Response, next: NextFunction) =>{
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if(!token){
        res.status(401).json({message:"Acesso negado. Token não fornecido."});
        return;
    }
    try{
        const decode = jwt.verify(token, JWT_SECRET) as {email:string};
        const userServices = new UserServices();
        const { email } = decode ;
        if(!email){
            res.status(401).json({message: "Acesso negado. Inconsistência no token fornecido."});
            return;
        }
        const user = await userServices.FindByEmail(email);
        if(!user){
            res.status(401).json({message:"Acesso negado. Usuário desconhecido."});
            return;
        }
        setAuthUser(token, user);
        next();
    }catch(err){
        res.status(400).json({ message: "Token inválido." });
        return;
    }
}