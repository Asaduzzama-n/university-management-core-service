import cors from 'cors';
import express from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res, next) => {
//   // throw new Error('Normal Error');
//   throw new ApiError(400, 'custom error');
//   // next('custom error');
// });

app.use(globalErrorHandler);

export default app;
