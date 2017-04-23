import mongoose from 'mongoose';
import passport from 'passport';

import { sendJSONresponse } from './common';

let User = mongoose.model('User');

let login = (req, res) => {

    if (!req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }
    
    passport.authenticate('local', (err, user, info) => {
        var token;
        console.log(err);
        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);

};

export {
    login
};