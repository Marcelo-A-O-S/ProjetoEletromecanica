export interface JwtPayload {
    sub: number;      // ID do usuário
    email: string;
    name: string;
    role?: string;     // opcional, se você usar papel
    iat?: number;      // emitido em (timestamp automático)
    exp?: number;      // expiração (timestamp automático)
  }