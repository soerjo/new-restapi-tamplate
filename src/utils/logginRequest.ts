import { Response, Request, NextFunction } from "express";
import logging from "../config/logging";

const serverStatus = (req: Request, res: Response, next: NextFunction) => {
  const namespace = "SERVER";

  logging.info(
    namespace,
    `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    logging.info(
      namespace,
      `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });

  next();
};

export default serverStatus;
