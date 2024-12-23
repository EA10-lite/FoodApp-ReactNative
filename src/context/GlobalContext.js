import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    return (
        <GlobalContext.Provider 
            value={{
                user,
            }}
        >
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;