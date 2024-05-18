import { body, param } from "express-validator";

export class WorkerValidation {
    static saveWorker = () => [
        body("fullname").trim().notEmpty().withMessage("fullname is required"),
        body("role").trim().notEmpty().withMessage("role is required"),
        body("department").trim().notEmpty().withMessage("department is required"),
        body("hiringDate").notEmpty().withMessage("hiringDate is required"),
        body("hiringDate")
            .matches(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/)
            .withMessage("hiringDate is date")
    ];

    static paramWorkerId = () => [param("id").notEmpty().withMessage("id is required")];
}
