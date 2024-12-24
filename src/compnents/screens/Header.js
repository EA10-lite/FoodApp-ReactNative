import React from "react";
import {View, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FavoriteIcon from "react-native-vector-icons/SimpleLineIcons";
import Favorites from "../Favorites";


const Header = ({ 
    img_source, 
    goBack, 
    name,
    type,
}) => {
    return (
        <View style={styles.header}>
            <View style={styles.image_box}>
                <ImageBackground style={styles.image} src={img_source}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.icon} onPress={goBack}>
                            <Icon name="arrow-back-ios" size={18} style={{marginLeft: 8}} />
                        </TouchableOpacity>

                        <Favorites 
                            name={name}
                            type={type}
                        />
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',
    },
    image_box: {
        height: 321,
        marginBottom: 16,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
    },
    image: {
        height: 321,
    },
    icon: {
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 50,
        paddingHorizontal: 16,
    }
})

export default Header;