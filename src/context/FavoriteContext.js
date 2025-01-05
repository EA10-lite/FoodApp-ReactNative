import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();
export const useFavoriteContext = () => {
    return useContext(FavoriteContext);
};

const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorites = (data, type) => {
        let temp_favorites = [...favorites];
        if(isInFavorites(data.name, type)) {
            temp_favorites = temp_favorites.filter(item => !(item.name === data.name && item.type === type));
        } else {
            temp_favorites.push({...data, type});
        }

        setFavorites(temp_favorites);
        AsyncStorage.setItem("favorites", JSON.stringify(temp_favorites));
    }

    const getFavorites = async () => {
        let favorites = await AsyncStorage.getItem("favorites");
        if(favorites) setFavorites(JSON.parse(favorites));
        else {
            setFavorites([]);
        }
    }

    const isInFavorites = (name, type) => {
        return favorites.find(favorite => favorite.type === type && favorite.name === name)
    }

    useEffect(()=> {
        getFavorites();
    }, [])

    return (
        <FavoriteContext.Provider 
            value={{
                isInFavorites,
                toggleFavorites,
                favorites,
            }}
        >
            { children }
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider;