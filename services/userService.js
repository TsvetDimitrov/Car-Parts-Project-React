const User = require('../models/User');

async function createUser(name, email, phoneNumber, password) {
    const user = new User({
        name,
        email,
        phoneNumber,
        password
    });

    await user.save();
    return user;
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    const user = await User.findOne({ email: { $regex: pattern } });

    return user;
}

async function verifyUserEmailToken(res, userId, email) {
    User.findOne({ _id: userId, email: email }, function (err, user) {
        if (!user) {
            return res.status(401).send({ msg: 'We were unable to find a user for this verification. Please SignUp!' });
        } else if (user.isEmailVerified) {
            return res.status(200).send('User has been already verified. Please Login');
        } else {
            user.isEmailVerified = true;
            user.save(function (err) {
                if (err) {
                    return res.status(500).send({ msg: err.message });
                } else {
                    return res.status(200).send('Your account has been successfully verified');
                }

            });
        }
    });
}

module.exports = {
    createUser,
    getUserByEmail,
    verifyUserEmailToken
}