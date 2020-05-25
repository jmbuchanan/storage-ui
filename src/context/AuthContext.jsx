import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [firstName, setFirstName] = useState(undefined);

    const checkLogin = () => {
        console.log("Checking login...");
        const c = document.cookie;
        console.log("Cookie: " + c)
        c.split(';').filter(x => console.log(x))
        const token = c.split(';').filter(x => x.includes("Authorization="))[0];
        if (token) {
            console.log("token exists")
            setFirstName(JSON.parse(atob(token.split('.')[1])).firstName);
        } else {
            console.log("no token")
            setFirstName(undefined);
        }
        console.log("First Name: " + firstName);
    }

    return (
        <AuthContext.Provider value={{firstName, checkLogin}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
