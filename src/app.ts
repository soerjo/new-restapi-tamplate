import express from "express";
import serverStatus from "./utils/logginRequest";
import config from "./config/default";
import logging from "./config/logging";
import routes from "./routes";

const { host, port } = config.server;

const app = express();
app.use(serverStatus); //logging server status req

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  logging.info("SERVER", `Server run at http://${host}:${port}`);
  routes(app);
});
