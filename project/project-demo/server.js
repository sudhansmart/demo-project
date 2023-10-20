const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const PORT = 5174;
const DB_URL ="mongodb+srv://hariharasudhan15:user123@cluster0.oi9tzll.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

app.use(cors());
app.use(express.json());

// Connecting to MongoDB
mongoose
.connect(DB_URL,{})
.then(()=>{
    console.log("MongoDb is Connected")
})
.catch((err)=>{
        console.log("MongoDb Not Connected",err.message)
})

app.use('/',require('./routes/Routes'))





app.listen(PORT,()=>{
    console.log("Server is running on PORT",PORT);
})