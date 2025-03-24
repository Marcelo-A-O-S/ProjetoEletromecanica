export class User{
    id: number;
    name: string;
    email: string;
    role: string;
    password: string;
    constructor(){
        this.id = 0;
        this.name = "";
        this.email = "";
        this.role = "";
        this.password = "";
    }
}