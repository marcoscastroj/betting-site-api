const Bet = require('../models/betModel');

async function getBet(req, res){
    try {
        const bets = await Bet.find();
        res.json(bets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createBet(req,res) {
    const { user, value, odd } = req.body;
   

    try {
        const bet = new Bet({ user, value, odd });
        const potencialPayment = value * odd;
        bet.potencialPayment = potencialPayment;
         
        const newBet = await bet.save();
        res.status(201).json(newBet);
    } catch (error){
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getBet,
    createBet,
};