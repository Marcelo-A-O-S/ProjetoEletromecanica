export interface IGenerics<T> {
    Update(Entity: T): Promise<{
        entity: T;
        message: string;
    }>;
    ListAll(): Promise<T[]>;
    Save(Entity: T): Promise<{
        entity: T;
        message: string;
    }>;
    GetbyId(Id: number): Promise<T>;
    Delete(Entity: T): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
