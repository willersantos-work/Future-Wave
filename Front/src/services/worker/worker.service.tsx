import { api } from "@/api/api";
import { ICreateWorker } from "@/interfaces/ICreateWorker";
import { IListWorker } from "@/interfaces/IListWorker";
import { IWorker } from "@/interfaces/IWorker";
import { ServiceEnum } from "../service.enum";

enum MethodEnum {
    GET_ALL = "/",
    GET_BY_ID = "/",
    CREATE = "/",
    EDIT = "/",
    DELETE = "/"
}

const WorkerMethod = {
    GET_ALL: `${ServiceEnum.WORKER}${MethodEnum.GET_ALL}`,
    GET_BY_ID: `${ServiceEnum.WORKER}${MethodEnum.GET_BY_ID}`,
    CREATE: `${ServiceEnum.WORKER}${MethodEnum.CREATE}`,
    EDIT: `${ServiceEnum.WORKER}${MethodEnum.EDIT}`,
    DELETE: `${ServiceEnum.WORKER}${MethodEnum.DELETE}`
};

export class WorkerService {
    public static async getAll(): Promise<IListWorker[]> {
        const response = await api.get(WorkerMethod.GET_ALL);
        const data: IListWorker[] = response?.data;
        return data;
    }

    public static async getById(workerId: number): Promise<IWorker> {
        const response = await api.get(`${WorkerMethod.GET_ALL}${workerId}`);
        const data: IWorker = response?.data;
        return data;
    }

    public static async create(data: ICreateWorker): Promise<void> {
        await api.post(WorkerMethod.CREATE, data);
    }

    public static async updateById(data: ICreateWorker, workerId: number): Promise<void> {
        await api.put(`${WorkerMethod.EDIT}${workerId}`, data);
    }

    public static async delete(workerId: number): Promise<void> {
        await api.delete(`${WorkerMethod.DELETE}${workerId}`);
    }
}
