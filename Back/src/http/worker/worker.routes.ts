import { Router } from "express";
import { validateRequest } from "../../error/validateRequest";
import { WorkerController } from "./worker.controller";
import { WorkerValidation } from "./worker.validation";

export const workerRouter = Router();

const controller = new WorkerController();

workerRouter.post("/", WorkerValidation.saveWorker(), validateRequest, controller.create);
workerRouter.get("/", controller.getAll);
workerRouter.get("/:id", WorkerValidation.paramWorkerId(), validateRequest, controller.getById);
workerRouter.put(
    "/:id",
    [...WorkerValidation.paramWorkerId(), validateRequest, ...WorkerValidation.saveWorker()],
    controller.update
);
workerRouter.delete("/:id", WorkerValidation.paramWorkerId(), validateRequest, controller.delete);
