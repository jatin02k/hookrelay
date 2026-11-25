import type { NextFunction, Request, Response } from "express"

export const reqLogger = (req: Request, res: Response, next: NextFunction): void =>{
    console.log(`${req.method} ${req.path}`)
    next()
}