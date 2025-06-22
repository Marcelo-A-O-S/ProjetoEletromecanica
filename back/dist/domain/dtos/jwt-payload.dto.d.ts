export interface JwtPayload {
    sub: number;
    email: string;
    name: string;
    role?: string;
    iat?: number;
    exp?: number;
}
