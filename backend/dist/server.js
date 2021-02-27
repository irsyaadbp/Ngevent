"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/config/app"));
const PORT = process.env.PORT || 5000;
app_1.default.listen(PORT, () => {
    console.log(`Ngevent backend listening on port : ${PORT}`);
});
//# sourceMappingURL=server.js.map