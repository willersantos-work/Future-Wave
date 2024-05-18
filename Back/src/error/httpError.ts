export class HttpError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class NotFoundError extends HttpError {
    constructor(message: string = "Not Found") {
        super(message, 404);
    }
}

export class BadRequestError extends HttpError {
    constructor(message: string = "Bad Request") {
        super(message, 400);
    }
}

export class ConflictError extends HttpError {
    constructor(message: string = "Conflict") {
        super(message, 409);
    }
}
