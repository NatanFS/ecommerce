import React, { createContext, useContext, useEffect, useState } from 'react';
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
            const userResponse = await axios.get('api/usuario', {
                headers: { Authorization: `Token ${token}` },
            });
            setUser(userResponse.data);
            
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthenticated(false);
        setUser(null);
        window.location.reload();
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthenticated(true);
            axios.get('api/usuario', {
                headers: { Authorization: `Token ${token}` },
            })
            .then(response => setUser(response.data))
            .catch(error => {
                console.error(error);
                logout();
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};



const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
