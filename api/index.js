import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';

dotenv.config()

mongoose
    .connect(
        process.env.MONGODBPASSWORD
    )
    .then(() => {
        console.log('Database is up and running');
    }).catch(err => {
        console.log(err)
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

// request = data that we send to the API
// response = data that we receive from the API
app.use('/api/user', userRoutes);