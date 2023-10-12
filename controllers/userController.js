const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function registerUser(req,res){
    const {name, email, password} = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword});
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
}

async function login(req,res){
    const { email, password} = req.body;

    try{
        const user = await User.findOne({email});

        if (!user){
            return res.status(401).json({message: 'Invalid Credentials'});
        }

        const correctPassword = await bcrypt.compare(password, user.password);
        
        if(!correctPassword) {
            return res.status(401).json({ message: 'Invalid Credentials'})
        }
        const token = jwt.sign({ userId: user._id}, 'kasdfkokoa');
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

module.exports = {
    registerUser,
    login, 
}