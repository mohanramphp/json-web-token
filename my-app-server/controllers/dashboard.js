
import mongoose from 'mongoose';
let User = mongoose.model('User');


let dashboard = (req, res) => {

    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        User
            .findById(req.payload._id)
            .exec(function (err, user) {
                res.status(200).json(user);
            });
    }

};

export {
    dashboard
}
