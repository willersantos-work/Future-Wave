import { ConflictError, NotFoundError } from "../error/httpError";
import { IWorker } from "../models/worker/IWorker";
import { WorkerEntity } from "../models/worker/worker.entity";

export class WorkerService {
    public async create(newWorker: Partial<IWorker>): Promise<void> {
        console.log(`[${WorkerService.name}] start service create`);
        const hasName = await WorkerEntity.exists({ fullname: newWorker.fullname });
        if (hasName) {
            throw new ConflictError("Worker with same name already exist");
        }

        const worker = new WorkerEntity(newWorker);
        console.log(worker);
        await worker.save();
        console.log(`[${WorkerService.name}] end service create`);
    }

    public async getAll(): Promise<IWorker[]> {
        console.log(`[${WorkerService.name}] start service getAll`);
        const response = await WorkerEntity.find();
        console.log(`[${WorkerService.name}] end service getAll`);
        return response;
    }

    public async getById(id: string): Promise<IWorker> {
        console.log(`[${WorkerService.name}] start service getById`);
        const hasWorker = await WorkerEntity.exists({ id });
        if (!hasWorker) {
            throw new NotFoundError("Worker not found");
        }

        const worker = await WorkerEntity.findById(id);

        console.log(`[${WorkerService.name}] end service getById`);
        return worker;
    }

    public async update(id: string, workerData: Partial<IWorker>): Promise<void> {
        console.log(`[${WorkerService.name}] start service update`);
        const hasWorker = await WorkerEntity.exists({ id });
        if (!hasWorker) {
            throw new NotFoundError("Worker not found");
        }

        await WorkerEntity.findByIdAndUpdate(id, workerData, { new: true });
        console.log(`[${WorkerService.name}] end service update`);
    }

    public async delete(id: string): Promise<void> {
        console.log(`[${WorkerService.name}] start service delete`);
        console.log(id);
        const hasWorker = await WorkerEntity.exists({ _id: id });
        if (!hasWorker) {
            throw new NotFoundError("Worker not found");
        }

        await WorkerEntity.findByIdAndDelete(id);
        console.log(`[${WorkerService.name}] end service delete`);
    }
}
