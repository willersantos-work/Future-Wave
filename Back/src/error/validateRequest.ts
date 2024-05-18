import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import HttpStatusCodes from "http-status-codes";

export const validateRequest = (request: Request, response: Response, next: NextFunction) => {
    const result = validationResult(request);
    const errors = result.array();

    if (errors.length !== 0) return response.status(HttpStatusCodes.PRECONDITION_REQUIRED).send({ errors });

    next();
};
