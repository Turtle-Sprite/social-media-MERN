const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then (()=> {
        console.log('listening to db')
    })
    .catch((error) => {
        console.log(error)
    })
const PORT = 3000

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));


//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));


app.get('/', (req, res) => {
    res.send("welcome to my page")
 })

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
    })