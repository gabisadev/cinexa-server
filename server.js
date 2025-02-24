import express from 'express';
import cors from 'cors';;
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { router } from './routes/router.js';
import { db } from './config/db.js';
const PORT = 8080;

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(express.json());
app.use(cookieParser());

app.use('/api',router)

app.listen(PORT, '192.168.165.66');

db();