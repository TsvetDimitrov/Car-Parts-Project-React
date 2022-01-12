const express = require('express');
const cors = require('cors');
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const path = require('path');

const { PORT, FB_LOGIN } = require('./config/constants');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
const expressConfig = require('./config/express');


// passport.serializeUser(function (user, done) {
//     console.log('serializeUser: ' + user._id);
//     done(null, user._id);
// });
// passport.deserializeUser(function (id, done) {
//     User.findById(id, function (err, user) {
//         console.log(user);
//         if (!err) done(null, user);
//         else done(err, null);
//     });
// });

// passport.use(new FacebookStrategy({
//     clientID: FB_LOGIN.facebook_api_key,
//     clientSecret: FB_LOGIN.facebook_api_secret,
//     callbackURL: "http://localhost:3030/auth/facebook/callback"
// },
//     function (accessToken, refreshToken, profile, cb) {
//         User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//             if (err) { return cb(err); }
//             cb(null, user);
//         });
//     }
// ));

start();
async function start() {
    const app = express();
    await databaseConfig(app);
    app.use(express.json());
    expressConfig(app);

    //Can use cors library instead of that.
    app.use(cors());


    app.get('/api', (req, res) => {
        res.json({ text: 'It\'s working!' });
    });

    routesConfig(app);

    if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }

    app.listen(PORT, () => console.log(`App started at http://localhost:${PORT}`));
}
