import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    const login = async (data) => {
        try {
            let temp_data = {
                ...data,
                access_token: "",
            }
            await AsyncStorage.setItem("user", JSON.stringify(temp_data));
            await AsyncStorage.setItem("access_token", JSON.stringify(data?.access_token));
            setUser(temp_data);
        } catch (error) {
            console.error('Error storing data', error);
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem("user");
        await AsyncStorage.removeItem("access_token");

        setUser();
    }

    const getStoredData = async () => {
        const response = await AsyncStorage.getItem("user");
        let stored_user = JSON.parse(response);
        
        if(response) {
            setUser(stored_user);
        }
        else {
            console.log("no user found");
        }
    }

    useEffect(()=> {
        getStoredData();
    }, [])
 
    return (
        <GlobalContext.Provider 
            value={{
                user,
                setUser,
                login,
                logout,
            }}
        >
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;