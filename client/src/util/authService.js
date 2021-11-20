export const getUser = () => {
    let email = localStorage.getItem('email');
    let isAdmin = localStorage.getItem('isAdmin');
    return {email, isAdmin};
};

export const isAdmin = () => {
    let isAdmin = localStorage.getItem('isAdmin');

    return isAdmin;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
};