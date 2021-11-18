const Part = require('../models/Part');
const userService = require('../services/userService');

async function createPart(partData) {
    const part = new Part(partData);
    await part.save();
    return part;
}

async function getNavigationSystems() {
    const parts = await Part.find({ type: 'GPS и навигации' }).lean();

    return parts;
}

async function getPartsByType(partsType) {
    const parts = await Part.find({ type: partsType }).lean();

    return parts;
}

async function getPartsByBrand(brandName) {
    const parts = await Part.find({ brand: brandName }).lean();

    return parts;
}

async function getPartById(id) {
    console.log("HERE", id);
    const part = await Part.findById(id).lean();

    return part;
}

async function getAllParts() {
    const parts = await Part.find({}).lean();

    return parts;
}

async function addPartToCart(id, userMail) {
    const part = await Part.findById(id);
    const user = await userService.getUserByEmail(userMail);

    part.orderedBy.push(user);
    user.orders.push(part);

    return Promise.all([user.save(), part.save()]);

}

async function deletePartById(id) {
    return Part.findByIdAndDelete(id);
}

async function editPartById(id, partData) {
    const part = await Part.findById(id);
    console.log('Service part Data >>', part);
    part.category = partData.category;
    part.type = partData.type;
    part.brand = partData.brand
    part.model = partData.model;
    part.yearFrom = partData.yearFrom;
    part.yearTo = partData.yearTo;
    part.engineType = partData.engineType;
    part.partColor = partData.partColor;
    part.imageUrl = partData.imageUrl;
    part.condition = partData.condition;
    part.title = partData.title;
    part.price = partData.price;

    return part.save();
}


async function getUserOrders(ids) {
    return await Part.find({ '_id': { $in: ids } }).lean();
}

async function removeProductFromCart(user, id) {
    console.log(user.orders);
    console.log(id);
    user.orders.pull(id);
    user.save();
}

module.exports = {
    createPart,
    getNavigationSystems,
    getPartsByType,
    getPartsByBrand,
    getPartById,
    getAllParts,
    addPartToCart,
    deletePartById,
    editPartById,
    getUserOrders,
    removeProductFromCart
}