import express from 'express';
import { AuthRoute } from './routes/AuthRoute';
import { UserRoute } from './routes/UserRoute';
import { ProjectRoute } from './routes/ProjectRoute';
import { ConfigurationRoute } from './routes/ConfigurationRoute';
import { ConfigurationProjectRoute } from './routes/ConfigurationProjectRoute';
import { DataConfigurationRoute } from './routes/DataConfigurationRoute';
import { IConfig } from '..';
import cors from 'cors'
import bodyParser from 'body-parser';
export class App {
    private server: express.Application;
    private port:number;
    constructor(props: IConfig){
        this.server = express();
        this.port = props.port;
        this.listen(props.port);
        this.middleware();
        this.routes();
    }
    listen(port: number){
        this.server.listen(port,()=>{
            console.log(`Escutando na porta: http://localhost:${port}`);
            console.log(`Documentção da aplicação: http://localhost:${port}/api-docs`);
        })
    }
    private middleware(){
        console.log('Configurando middleware...');
        this.server.use(cors());
        this.server.use(bodyParser.json());
        console.log('Middleware configurado!');
    }
    private routes(){
        this.server.use('/auth', AuthRoute());
        this.server.use('/users', UserRoute());
        this.server.use('/project', ProjectRoute());
        this.server.use("/configuration",ConfigurationRoute());
        this.server.use("/configurationProject",ConfigurationProjectRoute());
        this.server.use("/dataConfiguration", DataConfigurationRoute());
    }

}