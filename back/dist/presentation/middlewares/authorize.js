"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorizate = void 0;
const common_1 = require("@nestjs/common");
class Authorizate {
    use(req, res, next) {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new common_1.HttpException("Acesso negado. Token não fornecido.", common_1.HttpStatus.BAD_REQUEST);
        }
        next();
    }
}
exports.Authorizate = Authorizate;
//# sourceMappingURL=authorize.js.map