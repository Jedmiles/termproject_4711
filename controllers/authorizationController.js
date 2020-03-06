// models
const profileModel = require('../models/profileModels');

// template
// exports._____ = (req, res) => {
//     res.render('____');
// }

exports.loginPage = (req, res) => {
    res.render('loginPage');
}

// signUp (create a new user)
// login (get email + pass from db, and log user in if email and pass match)
// homePage (load user's home page)
// registerPage (load register page)
// register (from POST /register.  registers user. info added to db)