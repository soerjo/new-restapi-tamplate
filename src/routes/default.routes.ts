import express from "express";
import {
  defaultGet,
  defaultPost,
  defaultDelete,
  defaultPut,
  defaultGetID,
} from "../controllers/default.controllers";

const defaultRoutes = express.Router();

defaultRoutes.get("/", defaultGet);
defaultRoutes.get("/:parameter", defaultGetID);
defaultRoutes.post("/", defaultPost);
defaultRoutes.delete("/", defaultDelete);
defaultRoutes.put("/", defaultPut);

export default defaultRoutes;
