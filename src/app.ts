import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './App/middlewares/globalErrorhandler';
import notFound from './App/middlewares/notFound';
import router from './App/routes';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hi Next Level Developer !');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
