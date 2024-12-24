import React from "react";
import { ScrollView, StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Header } from "../../compnents/profile";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/MaterialIcons"

const Field = ({ title, url, handlePress }) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.row, styles.btn]}>
                <View style={[styles.left, styles.row]}>
                    <View style={[styles.img, styles.row]}>
                        <Image source={url} />
                    </View>
                    <Text>{title}</Text>
                </View>
                <Icon name="navigate-next" size={24} color="#747783" />
            </View>
        </TouchableOpacity>
    )
}

const Profile = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    <Header />
                </View>

                <View style={styles.body}>
                    <View style={styles.field}>
                        <Field 
                            title="Personal Info"
                            url={require("../../../assets/img/user.png")}
                            handlePress={()=> navigation.navigate("PersonalInfo")}
                        />
                        <Field 
                            title="Address"
                            url={require("../../../assets/img/map.png")}
                            handlePress={()=> navigation.navigate("Address")}
                        />
                    </View>

                    <View style={styles.field}>
                        <Field 
                            title="Cart"
                            url={require("../../../assets/img/cart-alt.png")}
                            handlePress={()=> navigation.navigate("PersonalInfo")}
                        />
                        <Field 
                            title="Favorite"
                            url={require("../../../assets/img/heart.png")}
                            handlePress={()=> navigation.navigate("Address")}
                        />

                        <Field 
                            title="Orders"
                            url={require("../../../assets/img/map.png")}
                            handlePress={()=> navigation.navigate("Address")}
                        />
                        <Field 
                            title="Payment"
                            url={require("../../../assets/img/card.png")}
                            handlePress={()=> navigation.navigate("Address")}
                        />
                    </View>

                    <View style={styles.field}>
                        <Field 
                            title="Logout"
                            url={require("../../../assets/img/Logout.png")}
                            handlePress={()=> navigation.navigate("PersonalInfo")}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    head: {
        marginBottom: 28,
    },
    body: {
        padding: 16,
    },
    field: {
        backgroundColor: "#F6F8FA",
        borderRadius: 12,
        marginBottom: 32,
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    btn: {
        justifyContent: "space-between",
        padding: 12,
    },
    img: {
        backgroundColor: colors.white,
        width: 44,
        height: 44,
        borderRadius: "50%",
        justifyContent: "center",
    },
    icon: {
        width: 28,
        height: 28,
        objectFit: "contain"
    },
});

export default Profile;