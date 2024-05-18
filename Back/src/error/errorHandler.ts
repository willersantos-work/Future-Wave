import { NextFunction, Request, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import { HttpError } from "./httpError";

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof HttpError) {
        return response.status(error.statusCode).json({ errors: [{ msg: error.message }] });
    }

    return response
        .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: HttpStatusCodes.INTERNAL_SERVER_ERROR, message: error.message });
};
