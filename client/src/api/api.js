export const settings = {
    host: '',
};


async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();

            return data;
        } catch (err) {

            return response;
        }
    } catch (err) {
        console.error(err.message);
        alert(err.message);
        throw err;
    }
}

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    }

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}


export async function login(email, password) {
    const result = await post(settings.host + '/auth/login', { email, password });

    sessionStorage.setItem('name', result.name);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('phoneNumber', result.phoneNumber);
    sessionStorage.setItem('authToken', result.authToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('isAdmin', result.isAdmin);
    document.cookie = result.authToken;
}


export async function register(name, email, phoneNumber, password) {
    const result = await post(settings.host + '/auth/register', { name, email, phoneNumber, password });
    sessionStorage.setItem('name', result.name);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('phoneNumber', result.phoneNumber);
    sessionStorage.setItem('authToken', result.authToken);
    sessionStorage.setItem('userId', result._id);
}

export async function logout() {
    const result = await get(settings.host + '/auth/logout');

    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('phoneNumber');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('isAdmin');

    return result;
}