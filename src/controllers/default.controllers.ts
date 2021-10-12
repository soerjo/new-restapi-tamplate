import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";
import { IDefaultData } from "../interface/interfaceData";

const namespace = "DEFAULT -CONTROLLERS";
let defaultData: IDefaultData[] = [];

export const defaultGet = (req: Request, res: Response, next: NextFunction) => {
  logging.info(namespace, "default get controller called");

  return res.status(200).send({
    message: "called default get!",
    data: defaultData,
  });
};

export const defaultPost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(namespace, "default post controller called");
  const { name, status } = req.body;
  const id = defaultData.length + 1;
  const createData = { id, name, status };

  defaultData.push(createData);

  return res.status(200).send({
    message: "called default post!",
    data: createData,
  });
};

export const defaultDelete = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(namespace, "default get controller called");
  const { name } = req.body;

  if (defaultData.length > 0) {
    defaultData = defaultData.filter((val) => val.name !== name);
    console.log(defaultData);
  } else if (defaultData.find((val) => val.name === name)) {
    return res
      .status(200)
      .send({ message: `data name: ${name}, tidak tidak ditemukan` });
  } else {
    return res.status(200).send({
      message: `delete tidak bisa dilakukan, data masih kosong arr:[${defaultData.length}]`,
    });
  }

  return res.status(200).send({
    message: "called default get!",
    data: defaultData,
  });
};

export const defaultPut = (req: Request, res: Response, next: NextFunction) => {
  logging.info(namespace, "default put controller called");
  const { name, status } = req.body;

  if (defaultData.find((val) => val.name === name)) {
    defaultData.forEach((val) => val.name === name && (val.status = status));
  } else {
    return res.status(400).send({
      message: `data name ${name}, tidak dapat ditemukan`,
    });
  }

  return res.status(200).send({
    message: `data name ${name}, telah teredit`,
    data: defaultData,
  });
};

export const defaultGetID = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { parameter } = req.params;

  const data = defaultData.filter((val) => val.id.toString() === parameter);
  if (data) {
    return res.status(200).send({ message: "data ditemukan" });
  }
  return res.status(400).send({
    message: `data id:${parameter} tidak ditemukan`,
  });
};
