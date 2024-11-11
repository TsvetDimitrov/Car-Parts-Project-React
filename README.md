# Technologies used:

### Back-end: Express.js, bcrypt, jsonwebtoken, mongoose, cors, cookie-parser, nodemon, crypto, dotenv, nodemailer, nodemailer-sendgrid-transport
### Front-end: ReactJS
### DB: MongoDB

# How to start up the project?
### STEP 1: Install MongoDB.
### STEP 2: Go to the both directories: server and client and type "npm i" in the terminal. 
### STEP 3: After that type "npm start" in the both directories - that will start the express server, and the http server. 
### STEP 4: You will need to create .env file in the root directory in order to run the server. Create account in sendgrid and create an API key in order to use the email confirmation functionality. Should be named: "SENDGRID_APIKEY". Create your server running port: "PORT". Create your DB connection string: "DB_CONNECTION_STRING". Create your "TOKEN_SECRET". Create your "COOKIE_NAME". Example:
<a href="https://ibb.co/HpJzX5c"><img src="https://i.ibb.co/HpJzX5c/API-KEYS.png" alt="API-KEYS" border="0"></a>

### NOTE: To save your changes while working on the back end, run the following command:"npm run dev". This command starts the Nodemon server, which automatically restarts the server each time a file is saved. Also keep in mind that you may need to install NVM (Node Version Manager) in order to switch to old node versions < 17 if . 


# Features:
### Login/Register/Logout user, save data from the server in the sessionStorage.
### Accessible pages: home, buy-out, buy-out-data, create (if admin), about-us, 404
### Anti Spam - Email confirmation

# Bonuses:
### E2E application tests

# TODO:
### Update the shopping-cart if the user has ordered a part. :heavy_check_mark:
### Add email verification in the back-end. :heavy_check_mark:
### Add payment API.
### Login with Google or Facebook.
### Update quantity number of ordered products on the cart in navigation tab.

### I am open to any advices, comments, or issues. Feel free to contact me. 


