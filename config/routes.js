const authController = require('../controllers/authController');
const createController = require('../controllers/createController');
const partController = require('../controllers/partController');
const carController = require('../controllers/carController');


module.exports = (app) => {
    app.use('/api/create', createController);
    app.use('/api/auth', authController);
    app.use('/api/parts', partController);
    app.use('/api/carRequests', carController);
};