import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
//components
import { Connection } from './database/db.js';
import DefaultData from './default.js'

dotenv.config();

const app = express();

const PORT = 8000;

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

Connection(username, password);
//0ezVe3ZbOlfBzvsz   ----MOngo password
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

//data to database
DefaultData();