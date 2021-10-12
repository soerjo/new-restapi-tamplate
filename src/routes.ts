import { Express } from "express";
import defaultRoutes from "./routes/default.routes";
import { errorHandling } from "./utils/errorHandling";

export default function (app: Express) {
  app.use("/", defaultRoutes); //default Routes

  app.use(errorHandling); //Error Handling
}
