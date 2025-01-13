import React from "react";
import { StyleSheet, Text, View, Modal, ImageBackground, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Favorites } from "../main";
import colors from "../../styles/colors";
import { useCartContext } from "../../context/CartContext";

const FoodModal = ({ closeModal, isOpen, food }) => {
    const { _id, name, about, pictures, restaurant, price, rating, time } = food;

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
        <View>
            <Modal
                visible={isOpen}
                transparent={true}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.foodContainer}>
                        <View style={[styles.details, styles.head]}>
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

                        <View style={styles.image_box}>
                            <ImageBackground style={styles.image} src={pictures[0]}>
                                <View style={[styles.row, styles.img_btns]}>
                                    <TouchableOpacity style={styles.icon} onPress={closeModal}>
                                        <Icon name="close" size={18} />
                                    </TouchableOpacity>

                                    <Favorites 
                                        data={food}
                                        type={"Food"}
                                    />
                                </View>
                            </ImageBackground>
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
                            <Text style={styles.desc}>{ about }</Text>
                        </View>

                        <View style={styles.footer}>
                            { !isInCart(_id) ? (
                                <TouchableOpacity style={styles.cart_btn} onPress={handleAddToCart}>
                                    <Text style={styles.btn_text}> Add To cart </Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.row}>
                                    <View>
                                        <Text style={styles.quantity}>x{cart.find((item)=> item.id === _id).quantity} items</Text>
                                        <Text style={styles.price}>${price * cart.find((item)=> item.id === _id).quantity}</Text>
                                    </View>
                                    <View style={[styles.cart, styles.row]}>
                                        <TouchableOpacity style={styles.btn} onPress={()=> removeFromCart(_id)}>
                                            <Icon name="minus" size={18} color={colors.white} />
                                        </TouchableOpacity>
                                        <Text style={styles.input}>{cart.find((item)=> item.id === _id).quantity}</Text>
                                        <TouchableOpacity style={styles.btn} onPress={handleAddToCart}>
                                            <Icon name="plus" size={18} color={colors.white} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles= StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    foodContainer: {
        backgroundColor: "#fff",
        minHeight: "65%",
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        overflow: "hidden",
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ECF0F4"
    },
    image_box: {
        height: 221,
        marginBottom: 16,
    },
    image: {
        height: 221,
        backgroundColor: "crimson"
    },
    img_btns: {
        marginTop: 10,
        paddingHorizontal: 16
    },
    row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    features: {
        gap: 24,
        marginBottom: 16,
        justifyContent: "flex-start"
    },
    feature: {
        gap: 5,
    },
    details: {
        padding: 16,
    },
    detail: {
        marginTop: 0,
        paddingHorizontal: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
    },
    subtitle: {
        price: 14, 
        marginTop: 4,
        color: colors.secondary
    },
    price: {
        fontSize: 18,
        fontWeight: 600,
    },
    desc: {
        fontSize: 14,
    },
    body: {
        paddingHorizontal: 16,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: colors.grey,
        marginTop: 40,
        width: "100%",
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 28,
    },
    cart_btn: {
        backgroundColor: colors.dark,
        width: "100%",
        paddingVertical: 18,
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
});

export default FoodModal;