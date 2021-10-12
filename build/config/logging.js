"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
//clg info
const info = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] [${message}] - [${object}]`);
    }
    else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] [${message}]`);
    }
};
//clg warn
const warn = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [WARN!] [${namespace}] [${message}] - [${object}]`);
    }
    else {
        console.log(`[${getTimeStamp()}] [WARN!] [${namespace}] [${message}]`);
    }
};
//clg debug
const debug = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] [${message}] - [${object}]`);
    }
    else {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] [${message}]`);
    }
};
//clg error
const error = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [ERROR!] [${namespace}] [${message}] - [${object}]`);
    }
    else {
        console.log(`[${getTimeStamp()}] [ERROR!] [${namespace}] [${message}]`);
    }
};
exports.default = { info, warn, debug, error };
