import dotenv from "dotenv";
dotenv.config();

//Server Default
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 8000;

const server = {
  host: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

//Database Default

const config = {
  server,
};

export default config;
