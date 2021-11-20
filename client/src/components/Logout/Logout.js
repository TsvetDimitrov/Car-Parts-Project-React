import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { logout } from '../../api/data.js';

const Logout = ({ onLogout }) => {
    let navigate = useNavigate();

    useEffect(async () => {
        await logout();
    }, []);

    onLogout();
    navigate('/');
    return null;
};

export default Logout;