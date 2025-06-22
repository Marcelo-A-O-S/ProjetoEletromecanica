export function parseJWT(token: string){
    try {
        const base64Payload = token.split('.')[1];
        const payload = atob(base64Payload);
        return JSON.parse(payload);
      } catch (err) {
        console.error("Token inválido:", err);
        return null;
      }
}