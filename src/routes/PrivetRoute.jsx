import { useContext } from 'react';
import { AuthProvider } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const {
        user,
        loader
    } = useContext(AuthProvider);

    const location = useLocation()

    if (loader) {
        return <h3>Loading...</h3>;
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;