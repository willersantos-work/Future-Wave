import { model, Schema } from "mongoose";
import { IWorker } from "./IWorker";

const schema: Schema = new Schema({
    department: {
        type: String,
        required: true
    },
    hiringDate: {
        type: Date,
        required: true
    },
    fullname: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

const tableName = "worker";

export const WorkerEntity = model<IWorker>(tableName, schema);
