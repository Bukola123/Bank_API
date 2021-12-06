const express = require('express');
const router = express.Router();
const path = require('path')
//models
const {createUser,getUser,loginUser, verifyUser} = require('../controllers/BankApiControllers');
//validators
const {userValidator} = require('../middlewares/BankApiValidators')

//Welcome

router.get('/', (req,res)=>{
    //res.render('../views/welcome.ejs');
    res.sendFile(path.join(__dirname, "../views/welcome.html"))
})

/*//Register use
router.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/register.html"))
    //res.sendFile(path.join(__dirname, "../views/register.html"))
});*/

//Register User
router.get('/register',createUser);

//Login
router.post('/login',loginUser);

//Get User
router.get('/User',getUser);

//verify account
router.post('/verify',verifyUser)



module.exports = router
