import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


app.use('/api/tasks', taskRoutes);

// start the server
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
});
