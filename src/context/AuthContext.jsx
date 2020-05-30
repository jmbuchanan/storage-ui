import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [firstName, setFirstName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const setUserBasedOnAuthCookie = () => {

        const authCookie = getCookieByName(document.cookie, "Authorization");

        if (authCookie) {
            const firstName = getFirstNameClaim(authCookie);
            const isAdmin = getAdminClaim(authCookie);

            setFirstName(firstName);
            setIsAdmin(isAdmin);
            
        } else {
            setFirstName('');
            setIsAdmin(false);
        }
    }

    const getCookieByName = (cookies, name) => {
        if (cookies) {
            return cookies.split(';').filter(cookie => cookie.includes(name))[0];
        }
    }

    const getFirstNameClaim = (authCookie) => {
        return JSON.parse(atob(authCookie.split('.')[1])).firstName;
    }

    const getAdminClaim = (authCookie) => {
        return JSON.parse(atob(authCookie.split('.')[1])).isAdmin;
    }

    return (
        <AuthContext.Provider value={{firstName, isAdmin, setUserBasedOnAuthCookie}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
