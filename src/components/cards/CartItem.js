import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { useCartContext } from "../../context/CartContext";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/AntDesign";
import DeleteIcon from "react-native-vector-icons/Ionicons";


const CartItem = ({data}) => {
    const { addToCart, removeFromCart, cart} = useCartContext();

    const handleAddToCart = () => {
        addToCart(data);
    }

    return (
       <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.left}>
                    <Image src={data?.picture} style={styles.img} />
                </View>
                <View style={styles.right}>
                    <View style={styles.trash}>
                        <TouchableOpacity style={styles.delete}>
                            <DeleteIcon name="trash" size={20} color={colors.white} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.price}>${data.price}</Text>

                    <View style={[styles.row, styles.btns]}>
                        <View style={[styles.cart]}>
                            <TouchableOpacity style={styles.btn} onPress={()=> removeFromCart(data.id)}>
                                <Icon name="minus" size={16} color={colors.white} />
                            </TouchableOpacity>
                            <Text style={styles.input}>{cart.find((item)=> item.id === data.id).quantity}</Text>
                            <TouchableOpacity style={styles.btn} onPress={handleAddToCart}>
                                <Icon name="plus" size={16} color={colors.white} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 24,
        overflow: "hidden",
        borderWidth: 1,
        borderRadius: 12,
        borderColor: colors.white,
        paddingHorizontal: 12,
        paddingVertical: 8,
        position: "relative",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 24,
    },
    left: {
        width: "35%"
    },
    right: {
        width: "55%"
    },
    img: {
        width: "100%",
        minHeight: 109,
        objectFit: "cover",
        borderRadius: 25,
    },
    name: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 600,
        marginTop: 12,
    },
    price: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 600,
    },
    quantity: {
        color: colors.white,
    },
    btns: {
        width: "100%"
    },
    cart: {
        borderRadius: 133.32,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: 117,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 4,
        marginTop: 12,
        backgroundColor: colors.white,
    },
    btn: {
        backgroundColor: colors.dark,
        width: 24,
        height: 24,
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
    trash: {
        position: "absolute",
        top: 0,
        right: 0,
    },
    delete: {

    }
})

export default CartItem;