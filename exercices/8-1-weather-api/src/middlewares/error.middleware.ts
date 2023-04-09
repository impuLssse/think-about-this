import { validationResult, ValidationError } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

class ApiError extends Error {
    public status: number
    public errors: any[]

    constructor (status: number, code: string, errors = []) {
        super(code)
        this.status = status
        this.errors = errors
    }

    static badRequest (errors: ValidationError[]) {
        return new ApiError(400, 'Bad Request', errors as [])
    }
}

function exception (error: any, req: Request, res: Response, next: NextFunction) {
	if (error instanceof ApiError) {
        return res.status(error.status).json({
            code: error.message,
            errors: error.errors
        })
    }
    
    return res.status(500).json({ code: 'INTERNAL_SERVER_ERROR' })
}

function validation (req: Request, res: Response, next: NextFunction): void {
    if (!validationResult(req).isEmpty()) throw ApiError.badRequest(validationResult(req).array())
    next()
}

export { validation, exception, ApiError }