import { start } from "./api";
export interface IConfig {
    port: number;
}
(async ()=>{
    const portEnv: string = process.env.PORT as string
    if (portEnv) {
        const portNumber = parseInt(portEnv);
        if (isNaN(portNumber)) {
            console.error("Porta inválida: corrija o valor para prosseguir");
            return;
        }
        const config: IConfig = {
            port: portNumber
        };
        await start(config);
    } else {
        console.log("Erro em obter a porta de conexão");
    }
})()