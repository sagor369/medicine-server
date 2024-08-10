"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
// import globalErrorHandler from './app/middlewares/globalErrorhandler';
// import notFound from './app/middlewares/notFound';
const routes_1 = __importDefault(require("./App/routes"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: ['http://localhost:5173'], credentials: true }));
// application routes
app.use('/api/v1', routes_1.default);
app.get('/', (req, res) => {
    res.send('Hi Next Level Developer !');
});
// app.use(globalErrorHandler);
//Not Found
// app.use(notFound);
exports.default = app;
