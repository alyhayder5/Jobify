import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import jobRoute from './routes/main.js';
import updateRoute from './routes/singleUpdate.js';
import connectionDatabase from './db/connect.js'
const app = express();
const PORT = process.env.PORT || 3000;


 
//middleware
app.use(express.json());
app.use(cors());
dotenv.config();


app.use('/',jobRoute)
app.use('/',updateRoute)


app.listen(PORT,()=>{
    connectionDatabase()
    console.log(`listening to the port ${PORT}`)
})
