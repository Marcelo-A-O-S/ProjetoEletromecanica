import { v4 as uuidv4 } from 'uuid';
export class RegisterLink{
    id: number;
    description: string;
    token: string;
    urlRegister: string;
    constructor(){
        this.id = 0;
        this.description = "";
        this.token = "";
        this.urlRegister = "";
    }
    generateToken(){
        this.token = uuidv4();
    }
}