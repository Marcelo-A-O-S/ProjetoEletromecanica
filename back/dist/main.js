"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const serverless_express_1 = require("@vendia/serverless-express");
let cachedServer;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    if (process.env.NODE_ENV !== 'production') {
        await app.listen(process.env.PORT ?? 3000);
    }
    return app;
}
bootstrap();
const handler = async (event, context, callback) => {
    if (!cachedServer) {
        const app = await bootstrap();
        const expressApp = app.getHttpAdapter().getInstance();
        cachedServer = (0, serverless_express_1.default)({ app: expressApp });
    }
    return cachedServer(event, context, callback);
};
exports.default = handler;
//# sourceMappingURL=main.js.map