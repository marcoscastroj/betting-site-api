const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const betsRouter = require('./routes/betRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/bets', betsRouter);
app.use('/user', userRouter);

mongoose.connect('mongodb://127.0.0.1:27017/BetBD',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(port, ()=> {
    console.log('Servidor Rodando na porta 3000')
})