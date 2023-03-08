import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/api-auth-token', {
                username: email,
                password: password
            });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setAuthenticated(true);
            //   const userResponse = await axios.get('https://example.com/api/me', {
            //     headers: { Authorization: `Bearer ${token}` },
            //   });
            //   setUser(userResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ authenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
