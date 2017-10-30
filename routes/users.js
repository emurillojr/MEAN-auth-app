const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


// Register
router.post('/register', (req, res, next) => {
    //res.send('REGISTER');
    // new user object
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register user'
            });
        } else {
            res.json({
                success: true,
                msg: 'User Registered'
            });
        }

    });
});

// Authentication
router.post('/authenticate', (req, res, next) => {
    //res.send('AUTHENTICATE');
    // get username and passoord being submitted
    const username = req.body.username;
    const password = req.body.password;

    // get user by the username
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        // if no user return send response to client
        if (!user) {
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }
        // if there is a user check password (password entered, user.hashedpassword)
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            // if no error
            if (isMatch) {
                // create token
                const token = jwt.sign({
                    data: user
                }, config.secret, {
                    expiresIn: 604800 // 1 week worth of seconds
                });
                // response to front end
                res.json({
                    sucess: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
                // if password doesnt match
            } else {
                return res.json({
                    success: false,
                    msg: 'Wrong password'
                });
            }
        });

    });

});

// Profile
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    //res.send('PROFILE');
    res.json({
        user: req.user
    });
});

module.exports = router;
