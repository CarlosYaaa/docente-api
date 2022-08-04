"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUtil = void 0;
const exceptions_1 = require("@nestjs/common/exceptions");
var ErrorUtil;
(function (ErrorUtil) {
    function handleError(error) {
        var _a;
        if ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) {
            if (Buffer.isBuffer(error.response.data)) {
                var dataTemp = JSON.parse(error.response.data.toString());
                throw new exceptions_1.HttpException({
                    status: error.response.status,
                    message: dataTemp.message,
                }, error.response.status);
            }
            throw new exceptions_1.HttpException({
                status: error.response.status,
                message: error.response.data.message,
            }, error.response.status);
        }
        if (error instanceof exceptions_1.HttpException) {
            throw error;
        }
        else {
            throw new exceptions_1.InternalServerErrorException(error);
        }
    }
    ErrorUtil.handleError = handleError;
})(ErrorUtil = exports.ErrorUtil || (exports.ErrorUtil = {}));
//# sourceMappingURL=error.utils.js.map