import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import cors from 'cors';

//components
import { Connection } from './database/db.js';
import DefaultData from './default.js'
import Routes from './routes/routes.js'

dotenv.config();

const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes)



const PORT = 8000;

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

Connection(username, password);
//0ezVe3ZbOlfBzvsz   ----MOngo password
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

//data to database
DefaultData();