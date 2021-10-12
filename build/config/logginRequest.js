"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logginRequest = void 0;
const logging_1 = __importDefault(require("./logging"));
const logginRequest = (req, res, next) => {
    const namespace = "SERVER";
    const messageLogin = `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`;
    const messageFinish = `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.status}]`;
    logging_1.default.info(namespace, messageLogin);
    res.on("finish", () => {
        logging_1.default.info(namespace, messageFinish);
    });
    next();
};
exports.logginRequest = logginRequest;
