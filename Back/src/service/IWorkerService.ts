import { IWorker } from "../models/worker/IWorker";

export interface IWorkerService {
    create(workerData: Partial<IWorker>): Promise<void>;
    getAll(): Promise<IWorker[]>;
    getById(id: string): Promise<IWorker>;
    update(id: string, workerData: Partial<IWorker>): Promise<void>;
    delete(id: string): Promise<void>;
}
