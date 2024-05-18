import { Document } from "mongoose";

export interface IBaseWorker {
    department: string;
    hiringDate: Date;
    fullname: string;
    role: string;
}

export interface IWorker extends IBaseWorker, Document {}
