import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [firstName, setFirstName] = useState(undefined);

    const setUserBasedOnAuthCookie = () => {
        console.log("set user based on auth cookie");

        const authCookie = getCookieByName(document.cookie, "Authorization");

        console.log(authCookie);
        if (authCookie) {
            const firstName = getFirstNameClaim(authCookie);
            setFirstName(firstName);
        } else {
            setFirstName(undefined);
        }
    }

    const getCookieByName = (cookies, name) => {
        console.log(cookies);
        if (cookies) {
            return cookies.split(';').filter(cookie => cookie.includes(name))[0];
        }
    }

    const getFirstNameClaim = (authCookie) => {
        return JSON.parse(atob(authCookie.split('.')[1])).firstName;
    }

    return (
        <AuthContext.Provider value={{firstName, setUserBasedOnAuthCookie}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
