import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [customerId, setCustomerId] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [stripeCustomerId, setStripeCustomerId] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const setUserBasedOnAuthCookie = () => {

        const authCookie = getCookieByName(document.cookie, "Authorization");

        if (authCookie) {
            const claims = parseClaims(authCookie);

            setCustomerId(claims.customerId);
            setStripeCustomerId(claims.stripeCustomerId);
            setFirstName(claims.firstName);
            setIsAdmin(claims.isAdmin);
            
        } else {
            setCustomerId(0);
            setStripeCustomerId('');
            setFirstName('');
            setIsAdmin(false);
        }
    }

    const getCookieByName = (cookies, name) => {
        if (cookies) {
            return cookies.split(';').filter(cookie => cookie.includes(name))[0];
        }
    }

    const parseClaims = (authCookie) => {
        return JSON.parse(atob(authCookie.split('.')[1]));
    }

    return (
        <AuthContext.Provider value={{customerId, firstName, stripeCustomerId, isAdmin, setUserBasedOnAuthCookie}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
