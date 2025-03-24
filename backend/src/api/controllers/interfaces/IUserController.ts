import { Request, Response } from "express";
import { IGenericController } from "./IGenericController";

export interface IUserController extends IGenericController{
    FindByEmail(req: Request, res: Response): Promise<void>;
    FindByRoles(req: Request, res: Response): Promise<void>;
}