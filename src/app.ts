import express, { type Request, type Response } from 'express';
import { reqLogger } from './middleware/request-logger.js';

const app = express();

app.use(express.json())
app.use(reqLogger);


app.get('/', (req: Request, res: Response)=>{
    console.log('Welcome to HookRelay');
    res.status(200).json({ message: 'Welcome to HookRelay' });
})
app.get('/health', (req: Request, res: Response)=>{
    res.status(200).json({status:'ok'})
});

export default app

