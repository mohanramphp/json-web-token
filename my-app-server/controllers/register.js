import mongoose from 'mongoose';

import { sendJSONresponse } from './common';

let User = mongoose.model('User');

let registration = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }

    let user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    
    user.save((err) => {
        let token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });

};

export {
    registration
};