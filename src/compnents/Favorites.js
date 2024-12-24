import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useFavoriteContext } from "../context/FavoriteContext";

const Favorites = ({name, type}) => {
    const { toggleFavorites, isInFavorites} = useFavoriteContext();
    return (
        <TouchableOpacity style={styles.icon} onPress={()=> toggleFavorites(name, type)}>
            <Icon 
                name={isInFavorites(name, type) ? "heart" : "hearto"} size={20} 
                color={isInFavorites(name, type) ? "red" : "black"} 
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
})

export default Favorites;