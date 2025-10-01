import express, { Request, Response } from "express";
import homeRoute from './presentation/routes/home.route';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './infrastructure/config/db';

dotenv.config();

// Middleware

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app.use(cors( {origin: HOST} ));
app.use(express.json());
app.use('/api', homeRoute);


connectDb().then(() => {

    app.listen(PORT, () => {
    });

}).catch(err => {
    console.error("Failed to connect to the database", err);
    process.exit(1);
});

