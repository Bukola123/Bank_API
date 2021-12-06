const user = require('../models/User')
const {validationResult} = require('express-validator');
const path = require('path');
const bcrypt = require('bcrypt');


exports.createUser = async function (req, res){
    res.sendFile(path.join(__dirname, "../views/register.html"))
    
    const {email,firstName,lastName,password,password2,accountype} = req.body;
    const userItem = new user({email,firstName,lastName,password,password2,accountype});
    bcrypt.genSalt(10,(err,salt) =>
    bcrypt.hash(userItem.password,salt,
        (err,hash)=> {
            if(err) throw err;
            userItem.password = hash;
        }))
    await userItem.save();
    console.log(userItem);

    res.status(201).json({data: userItem});
    res.redirect('./Auth/Login')
};

exports.getUser = async function(req,res){
//res.send('Am getting all users');
const userItem = await user.find();
res.status(200).json({user: userItem});
}

exports.loginUser = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }


    const {email,password} = req.body;
    const loginId = req.params.email

    let loginItem;
    try {
        loginItem = await user.findById(loginId)
    } catch (error) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!loginItem) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ data: loginItem });
}

exports.verifyUser = async function (req, res) {
    req.body = {email:String,otp:String,}
    const verify = req.body

    const verifyId = req.params.verify

    let loginItem;
    try {
        loginItem = await user.findById(verifyId)
    } catch (error) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!loginItem) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ data: loginItem });
}
