import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import colors from "../../styles/colors";
import { Header } from "../../components/screens";
import { useCartContext } from "../../context/CartContext";
import food from "../../data/food";
import { Foods } from "../../containers";

const Food = ({navigation, route}) => {
    const { _id, name, about, pictures, restaurant, price, rating, time} = route.params;
    const { addToCart, isInCart, removeFromCart, cart } = useCartContext();

    const handleAddToCart = () => {
        addToCart({
            id: _id,
            name,
            picture: pictures[0],
            price,
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <View style={styles.head}>
                    <Header 
                        img_source={pictures[0]}
                        goBack={()=> navigation.goBack()}
                        data={{_id, name, price, pictures, rating, about, restaurant}}
                        type={"Food"}
                    />
                    <View style={styles.details}>
                        <View style={[styles.row, styles.detail]}>
                            <View style={styles.left}>
                                <Text style={styles.title}>{name}</Text>
                                <Text style={styles.subtitle}>{restaurant}</Text>
                            </View>

                            <View style={styles.right}>
                                <Text style={styles.price}>${price}</Text>
                            </View>
                        </View>
                    </View>
                </View> 

                <View style={styles.body}>
                    <View style={[styles.row, styles.features]}>
                        <View style={[styles.row, styles.feature]}>
                            <EvilIcon name="star" size={28} color={colors.primary} />
                            <Text style={styles.p}>{rating}</Text>
                        </View>
                        <View style={[styles.row, styles.feature]}>
                            <FeatherIcon name="truck" size={22} color={colors.primary} />
                            <Text style={styles.p}>Free</Text>
                        </View>
                        <View style={[styles.row, styles.feature]}>
                            <MaterialIcon name="access-time" size={22} color={colors.primary} />
                            <Text style={styles.p}>{time}</Text>
                        </View>
                    </View>

                    <Text style={styles.desc}>{about}</Text>
                </View> 

                <View style={styles.footer}>
                    <View style={[styles.row, styles.detail]}>
                        <View>
                            <Text style={styles.price}>${price}</Text>
                            <Text style={styles.subtitle}>20mins</Text>
                        </View>
                        { !isInCart(_id) ? (
                            <TouchableOpacity style={styles.cart_btn} onPress={handleAddToCart}>
                                <Text style={styles.btn_text}> Add To cart </Text>
                            </TouchableOpacity>
                        ) : (
                            <View style={[styles.cart, styles.row]}>
                                <TouchableOpacity style={styles.btn} onPress={()=> removeFromCart(_id)}>
                                    <Icon name="minus" size={18} color={colors.white} />
                                </TouchableOpacity>
                                <Text style={styles.input}>{cart.find((item)=> item.id === _id).quantity}</Text>
                                <TouchableOpacity style={styles.btn} onPress={handleAddToCart}>
                                    <Icon name="plus" size={18} color={colors.white} />
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View> 

                <View style={styles.similar}>
                    <Foods 
                        foods={food.slice(0, 4)}
                        handlePress={(data)=> navigation.navigate("FoodDetails", data)}
                        title="Similar Dish"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll_container: {
        flex: 1,
    },
    view: {
        flex: 1,
        position: 'relative',
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        color: colors.dark,
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 400,
        color: colors.dark,
    },
    price: {
        fontSize: 18,
        fontWeight: 600,
    },
    body: {
        padding: 16,
    },
    feature: {
        gap: 24,
        marginBottom: 16,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    details: {
        paddingHorizontal: 16,
    },
    detail: {
        justifyContent: "space-between",
    },
    icon: {
        objectFit: "cover",
        width: 20,
        height: 20,
    },
    truck: {
        width: 24,
        height: 16,
    },
    features: {
        gap: 24,
        marginBottom: 16,
        justifyContent: "flex-start"
    },
    feature: {
        gap: 5,
    },
    desc: {
        color: "#A0A5BA",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 24,
    },
    heading: {
        textTransform: "uppercase",
        textDecorationLine: "underline",
        fontSize: 13,
        fontWeight: 300,
        marginBottom: 10,
        color: "#000",
        letterSpacing: 0.5,
    },
    footer: {
        // position: 'absolute',
        // bottom: 0,
        // padding: 12,
        // width: "100%",
        paddingHorizontal: 16,
        // backgroundColor: colors.grey,
        // borderTopRightRadius: 32,
        // borderTopLeftRadius: 32,
    },
    checkout_btn: {
        backgroundColor: colors.primary,
        marginTop: 24,
        paddingVertical: 16,
        borderRadius: 133.32,
    },
    cart_btn: {
        backgroundColor: colors.dark,
        width: 137,
        paddingVertical: 12,
        borderRadius: 133.32,
    },
    btn_text: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 14,
        textTransform: "uppercase",
    },
    cart: {
        backgroundColor: colors.white,
        borderRadius: 133.32,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    btn: {
        backgroundColor: colors.dark,
        width: 32,
        height: 32,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 40,
        textAlign: "center",
        fontSize: 16,
        fontWeight: 600,
    },

    similar: {
        marginTop: 40,
        paddingHorizontal: 16,
    }
})

export default Food;