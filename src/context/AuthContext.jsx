import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [firstName, setFirstName] = useState(undefined);

    const checkLogin = () => {
        console.log("checkingLogin");
        const c = document.cookie;
        const token = c.split(';').filter(x => x.startsWith("Authorization="))[0];
        if (token) {
            setFirstName(JSON.parse(atob(token.split('.')[1])).firstName);
        } else {
            setFirstName(undefined);
        }
        console.log("firstName: " + firstName);
    }

    return (
        <AuthContext.Provider value={{firstName, checkLogin}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
