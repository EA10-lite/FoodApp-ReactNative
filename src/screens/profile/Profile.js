import React from "react";
import { ScrollView, StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Header } from "../../components/profile";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/MaterialIcons"
import AntIcon from "react-native-vector-icons/AntDesign"
import FeatherIcon from "react-native-vector-icons/Feather"

const Field = ({ title, handlePress, IconType}) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.row, styles.btn]}>
                <View style={[styles.left, styles.row]}>
                    <View style={[styles.img, styles.row]}>
                        {IconType}
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
                    <Header 
                        goBack={()=> navigation.goBack()}
                    />
                </View>

                <View style={styles.body}>
                    <View style={styles.field}>
                        <Field 
                            title="Personal Info"
                            handlePress={()=> navigation.navigate("PersonalInfo")}
                            IconType={<AntIcon name="user" color={colors.primary} size={24} />}
                        />
                        <Field 
                            title="Address"
                            handlePress={()=> navigation.navigate("Address")}
                            IconType={<FeatherIcon name="map" color="#413DFB" size={20} />}
                        />
                    </View>

                    <View style={styles.field}>
                        <Field 
                            title="Cart"
                            handlePress={()=> navigation.navigate("Cart")}
                            IconType={<FeatherIcon name="shopping-bag" color="#369BFF" size={20} />}
                        />
                        <Field 
                            title="Favorites"
                            handlePress={()=> navigation.navigate("Favorites")}
                            IconType={<AntIcon name="heart" color="#FB4A59" size={20} />}
                        />

                        <Field 
                            title="Orders"
                            handlePress={()=> navigation.navigate("Orders")}
                            IconType={<AntIcon name="shoppingcart" color="#413DFB" size={20} />}
                        />
                        <Field 
                            title="Payment"
                            handlePress={()=> navigation.navigate("Payment")}
                            IconType={<AntIcon name="creditcard" color="#369BFF" size={20} />}
                        />
                    </View>

                    <View style={styles.field}>
                        <Field 
                            title="Logout"
                            handlePress={()=> null}
                            IconType={<Icon name="logout" color="#FB4A59" size={20} />}
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
        padding: 24,
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