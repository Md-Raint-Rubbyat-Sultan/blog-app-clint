import { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthProvider = createContext();

const atuh = getAuth(app);

const AuthContext = ({ children }) => {

    const authInfo = {

    }

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;