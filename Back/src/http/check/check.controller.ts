import { Request, Response } from "express";
import HttpStatusCodes from "http-status-codes";

export class CheckController {
    public async verifyHealth(_: Request, response: Response) {
        try {
            console.log(`[${CheckController.name}] start method verifyHealth`);
            return response.sendStatus(HttpStatusCodes.OK);
        } catch (err) {
            console.error(
                `[${CheckController.name}] error method verifyHealth - ${JSON.stringify({ message: err.message })}`
            );
            return response
                .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
                .json({ status: HttpStatusCodes.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
}
