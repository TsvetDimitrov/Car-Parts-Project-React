const Car = require('../models/Car');
const userService = require('../services/userService');


async function createCar(partData, userEmail) {
    const car = new Car(partData);
    const user = await userService.getUserByEmail(userEmail);

    car.postedBy = user;
    await car.save();
    return car;
}

async function getCarRequests(){
    const cars = await Car.find({}).lean();

    return cars;
}

module.exports = {
    createCar,
    getCarRequests
}