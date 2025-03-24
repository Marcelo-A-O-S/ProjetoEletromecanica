import { User } from "./src/api/domain/models/User";

declare global {
    namespace Express {
        interface Request {
            user?: User | any; 
        }
    }
}