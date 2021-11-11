const authController = require('../controllers/authController');
const createController = require('../controllers/createController');
const partController = require('../controllers/partController');
const carController = require('../controllers/carController');


module.exports = (app) => {
    app.use('/create', createController);
    app.use('/auth', authController);
    app.use('/parts', partController);
    app.use('/carRequests', carController);
};