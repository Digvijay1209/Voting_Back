const express=require('express')
const cors = require('cors'); 
const db = require('./db');

const app=express();
app.use(cors({
    origin: 'https://voting-full-stack.vercel.app/', 
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], 
    credentials: true, 
}));
require('dotenv').config();
const bodyParser=require('body-parser');

app.use(bodyParser.json());
const PORT=3000;

const userRoutes=require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

app.use('/user',userRoutes);
app.use('/candidate',candidateRoutes);


app.listen(PORT,()=>{
    console.log('Hello ');
})