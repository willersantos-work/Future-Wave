import { NextFunction, Request, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import { IWorkerService } from "../../service/IWorkerService";
import { WorkerService } from "../../service/worker.service";

export class WorkerController {
    public async create(request: Request, response: Response, next: NextFunction) {
        const { fullname, role, department, hiringDate } = request.body;

        try {
            console.log(`[${WorkerService.name}] start method create`);
            const service: IWorkerService = new WorkerService();
            await service.create({ fullname, role, department, hiringDate });
            return response.sendStatus(HttpStatusCodes.CREATED);
        } catch (err) {
            console.error(`[${WorkerService.name}] error method create - ${JSON.stringify({ message: err.message })}`);
            next(err);
        }
    }

    public async getAll(_: Request, response: Response, next: NextFunction) {
        try {
            console.log(`[${WorkerService.name}] start method getAll`);
            const service: IWorkerService = new WorkerService();
            const data = await service.getAll();
            return response.json(data).status(HttpStatusCodes.OK);
        } catch (err) {
            console.error(`[${WorkerService.name}] error method getAll - ${JSON.stringify({ message: err.message })}`);
            next(err);
        }
    }

    public async getById(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params;

        try {
            console.log(`[${WorkerService.name}] start method getById`);
            const service: IWorkerService = new WorkerService();
            const data = await service.getById(id);
            return response.json(data).status(HttpStatusCodes.OK);
        } catch (err) {
            console.error(`[${WorkerService.name}] error method getById - ${JSON.stringify({ message: err.message })}`);
            next(err);
        }
    }

    public async update(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params;
        const { fullname, role, department, hiringDate } = request.body;

        try {
            console.log(`[${WorkerService.name}] start method update`);
            const service: IWorkerService = new WorkerService();
            await service.update(id, { fullname, role, department, hiringDate });
            return response.sendStatus(HttpStatusCodes.OK);
        } catch (err) {
            console.error(`[${WorkerService.name}] error method update - ${JSON.stringify({ message: err.message })}`);
            next(err);
        }
    }

    public async delete(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params;

        try {
            console.log(`[${WorkerService.name}] start method delete`);
            const service: IWorkerService = new WorkerService();
            await service.delete(id);
            return response.sendStatus(HttpStatusCodes.NO_CONTENT);
        } catch (err) {
            console.error(`[${WorkerService.name}] error method delete - ${JSON.stringify({ message: err.message })}`);
            next(err);
        }
    }
}
