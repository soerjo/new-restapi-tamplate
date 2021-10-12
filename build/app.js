"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logginRequest_1 = require("./config/logginRequest");
const default_1 = __importDefault(require("./config/default"));
const logging_1 = __importDefault(require("./config/logging"));
const app = (0, express_1.default)();
const { host, port } = default_1.default.server;
//Menjalankan tiap server di nyalakan
app.use(logginRequest_1.logginRequest);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(port, () => {
    logging_1.default.info("SERVER", `Server run at http://${host}:${port}`);
});
