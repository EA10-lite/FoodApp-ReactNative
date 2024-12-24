import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();
export const useFavoriteContext = () => {
    return useContext(FavoriteContext);
};

const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorites = (name, type) => {
        let temp_favorites = [...favorites];
        if(isInFavorites(name, type)) {
            temp_favorites = temp_favorites.filter(item => !(item.name === name && item.type === type));
        } else {
            temp_favorites.push({name, type});
        }

        setFavorites(temp_favorites);
    }

    const isInFavorites = (name, type) => {
        return favorites.find(favorite => favorite.type === type && favorite.name === name)
    }

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