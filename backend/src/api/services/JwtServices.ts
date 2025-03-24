import jwt,{ JwtPayload, SignOptions, VerifyOptions } from "jsonwebtoken";
import { User } from "../domain/models/User";
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_change_this_in_production";
interface Payload {
    name:string;
    email:string;
    role:string;
}
function createToken(payload: Payload, options? :SignOptions): string{
    return jwt.sign(payload, JWT_SECRET,options);
}

function verifyToken(token:string): Payload | null{
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        return decoded as Payload;
      } catch (error) {
        console.error('Token inválido:', (error as Error).message);
        return null;
      }
}

export {
    createToken,
    verifyToken
}