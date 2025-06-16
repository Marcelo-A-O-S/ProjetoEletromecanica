export interface IServices<T>{
    Save(entity: T): Promise<{entity: T, message:string}>;
    GetAll(): Promise<T[]>;
    GetbyId(id: number): Promise<T>
    Delete(entity: T): Promise<string>;
    DeleteById(Id: number): Promise<string>;
    Update(entity: T): Promise<{entity: T, message:string}>;
}