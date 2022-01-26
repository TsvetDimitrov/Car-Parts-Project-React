const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const Token = require('../models/Token');


async function createEmailToken(res, userId, userEmail, name) {

    //use token bcrypt instead of crypto library for optimization;
    const tokenEmail = new Token({ _userId: userId, token: crypto.randomBytes(16).toString('hex') });

    await tokenEmail.save(function (err) {
        if (err) {
            return console.log(err.message);
        }

        const transporter = nodemailer.createTransport(
            sendgridTransport({
                auth: {
                    api_key: process.env.SENDGRID_APIKEY,
                }
            })
        )
        let mailOptions = { from: 'dimitrovv32@gmail.com', to: userEmail, subject: 'Account Verification Link', text: 'Hello ' + name + ',\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + 'localhost:3030' + '\/api\/auth\/confirmation\/' + userEmail + '\/' + tokenEmail.token + '\n\nThank You!\n' };
        transporter.sendMail(mailOptions, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).send({ msg: 'Technical Issue!, Please click on resend for verify your Email.' });
            }
            return console.log('A verification email has been sent to ' + userEmail + '. It will be expire after one day. If you not get verification Email click on resend token.');
        });
    });

    return tokenEmail;
}

async function findAndVerifyToken(token) {
    return await Token.findOne({ token }, async function (err, data) {

        if (!data) {
            return res.status(400).send({ msg: 'Your verification link may have expired. Please click on resend for verify your Email.' });
        }

    }).clone();

}

module.exports = {
    createEmailToken,
    findAndVerifyToken
}