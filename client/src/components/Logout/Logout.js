import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { logout } from '../../api/data.js';

const Logout = ({ onLogout }) => {
    let navigate = useNavigate();

    useEffect(() => {
        async function logoutAction() {
            await logout();
        }

        logoutAction();
    }, []);

    onLogout();
    navigate('/');
    return null;
};

export default Logout;