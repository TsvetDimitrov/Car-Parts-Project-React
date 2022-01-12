module.exports = {
    PORT: process.env.PORT || 3030,
    DB_CONNECTION_STRING: 'mongodb+srv://TsvetomirAdminUser:Parolata12@cluster0.i98ec.mongodb.net/test',//'mongodb://localhost:27017/carParts',
    TOKEN_SECRET: 'verysecuretoken2323',
    COOKIE_NAME: 'SESSION_TOKEN',
    FB_LOGIN: {
        "facebook_api_key": "614930042844509",
        "facebook_api_secret": "702165dca15e6cd8175c5a42c9ac95c2",
        "callback_url": "http://localhost:3030/auth/facebook/callback",
        "use_database": false,
        "host": "localhost",
        "username": "root",
        "password": "",
        "database": "Database Name"
    }
}