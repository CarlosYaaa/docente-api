"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const body_parser_1 = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.use((0, body_parser_1.json)({ limit: '15mb' }));
    app.disable('x-powered-by');
    app.setGlobalPrefix(process.env.CONTEXT || '');
    await app.listen(process.env.PORT || 3002);
}
bootstrap();
//# sourceMappingURL=main.js.map