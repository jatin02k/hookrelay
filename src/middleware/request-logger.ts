import type { NextFunction, Request, Response } from "express"

export const reqLogger = (req: Request, res: Response, next: NextFunction): void =>{
    const start = performance.now();
    res.on('finish', ()=>{ 
        const durationMs = (performance.now() - start).toFixed(2);
        console.log(`${req.method} ${req.path} | ${res.statusCode} | ${durationMs}ms `)
    })
    next()
}