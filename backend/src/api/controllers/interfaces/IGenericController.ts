import { Request, Response } from "express";

export interface IGenericController{
    GetById(req: Request, res:Response):Promise<void>;
    ListAll(req: Request, res:Response): Promise<void>;
    Save(req: Request, res: Response): Promise<void>;
    Update(req:Request, res:Response): Promise<void>;
    Delete(req:Request, res:Response): Promise<void>;
    DeleteById(req:Request, res:Response): Promise<void>;

}