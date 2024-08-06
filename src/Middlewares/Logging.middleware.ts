import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const startTime = Date.now();
        res.on('finish', () => {
            const statusCode = res.statusCode;
            const endTime = Date.now();
            if(statusCode == 200 || statusCode == 201){
                console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${statusCode} - ${endTime - startTime}ms`);
            }else {
                console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${statusCode} ${res.statusMessage} - ${endTime - startTime}ms`);
            }
        });
        next();
    }
}