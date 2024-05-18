import { Router } from "express";
import { CheckController } from "./check.controller";

const checkController = new CheckController();

export const checkRouter = Router();

checkRouter.get("/", checkController.verifyHealth);
