import Router from "express";
import { checkRouter } from "./check/check.routes";
import { workerRouter } from "./worker/worker.routes";

export const router = Router();

router.use("/api/employees", workerRouter);
router.use("/api", checkRouter);
