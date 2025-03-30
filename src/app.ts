import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import setupSwagger from './swagger';
import usersRouter from './routers/usersRouter';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
setupSwagger(app);

app.use('/api-ev', usersRouter);

app.use((_req, res) => {
    res.status(404).json({ error: 'Page not found!'});
})

export default app;