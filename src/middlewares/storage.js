const part = require('../services/partService');
const car = require('../services/carService');

module.exports = () => (req, res, next) => {
    //TODO import and decorate services
    req.storage = {
        ...part,
        ...car
    };

    next();
};