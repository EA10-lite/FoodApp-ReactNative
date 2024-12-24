import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Octicons";


const Search = ({ handlePress }) => {
    return (
        <TouchableOpacity style={styles.search} onPress={handlePress}>
            <Icon name="search" size={18} />
            <Text style={styles.placeholder}> Search for dishes, restaurants </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: "#F6F6F6",
        padding: 16, 
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
        marginBottom: 24,
    },
    placeholder: {
        fontSize: 14,
        fontWeight: 300,
        lineHeight: 19,
    },
    icon: {
        width: 20,
        height: 20,
        objectFit: "cover"
    }
})

export default Search;