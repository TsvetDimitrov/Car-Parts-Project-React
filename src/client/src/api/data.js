import * as api from './api.js';

const host = 'https://dimiparts.herokuapp.com';
api.settings.host = 'https://dimiparts.herokuapp.com';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//App specific requests


//Facebook login: 
export async function facebookLogin() {
    const result = await api.get('/api/auth/facebook');
    return result;
}

export async function isUserAdmin() {
    const result = await api.get('/api/create');
    console.log(result);
    return result;
}

export async function createPart(category, type, brand, model, yearFrom, yearTo, engineType, partColor, imageUrl, condition, title, price) {
    const result = await api.post('/api/parts/create', { category, type, brand, model, yearFrom, yearTo, engineType, partColor, imageUrl, condition, title, price });
    return result;
}

export async function getNavigationSystems() {
    const result = await api.get('/api/parts/navigationSystems');
    return result;
}

export async function getProductById(id) {
    return await api.get('/api/parts/' + id);
}

export async function getAllProducts() {
    return await api.get('/api/parts');
}

export async function addProductToCart(id) {
    return await api.post('/api/parts/add/' + id);
}

export async function getPartsByType(partsType) {
    return await api.get('/api/parts/getPartsByType/' + partsType);
}

export async function deletePartById(partId) {
    return await api.del('/api/parts/delete/' + partId);
}

export async function editPartById(category, type, brand, model, yearFrom, yearTo, engineType, partColor, imageUrl, condition, title, price, partId) {
    return await api.put('/api/parts/edit/' + partId, { category, type, brand, model, yearFrom, yearTo, engineType, partColor, imageUrl, condition, title, price });
}

export async function getUserCartProducts() {
    return await api.get('/api/parts/cart');
}

export async function removeProductFromCart(id) {
    return await api.post('/api/parts/cart/delete/' + id);
}

export async function getProductsByBrand(brand) {
    return await api.get('/api/parts/getPartsByBrand/' + brand);
}

export async function createCarBuyOutRequest(carData) {
    return await api.post('/api/carRequests', carData);
}

export async function getCarRequests(){
    return await api.get('/api/carRequests');
}