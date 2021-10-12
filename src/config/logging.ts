const getTimeStamp = () => {
  return new Date().toISOString();
};

//clg info
const info = (namespace: string, message: string, object?: any): void => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [INFO] [${namespace}] [${message}] - [${object}]`
    );
  } else {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] [${message}]`);
  }
};

//clg warn
const warn = (namespace: string, message: string, object?: any): void => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [WARN!] [${namespace}] [${message}] - [${object}]`
    );
  } else {
    console.log(`[${getTimeStamp()}] [WARN!] [${namespace}] [${message}]`);
  }
};

//clg debug
const debug = (namespace: string, message: string, object?: any): void => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [DEBUG] [${namespace}] [${message}] - [${object}]`
    );
  } else {
    console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] [${message}]`);
  }
};

//clg error
const error = (namespace: string, message: string, object?: any): void => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [ERROR!] [${namespace}] [${message}] - [${object}]`
    );
  } else {
    console.log(`[${getTimeStamp()}] [ERROR!] [${namespace}] [${message}]`);
  }
};

export default { info, warn, debug, error };
