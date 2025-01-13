import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { OrderDetailsModal, OrderTrackModal } from "../modals";


const OrderItem = ({order, isDelivered}) => {
    const { id, items, amount_paid } = order;

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const cancelOrder = () => {
    }

    return (
       <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.left}>
                    {/* <Image src={data?.picture} style={styles.img} /> */}
                </View>
                <View style={styles.right}>
                    <Text style={styles.name}> Chicken Shawarma </Text>
                    <Text style={styles.name}> # { id } </Text>
                    <Text style={styles.price}> ${ amount_paid } </Text>
                    <TouchableOpacity onPress={()=> setIsVisible(true)}>
                        <Text> View details </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setIsVisible2(true)}>
                        <Text> Track order </Text>
                    </TouchableOpacity>
                </View>
            </View>

            { isVisible && (
                <OrderDetailsModal 
                    closeModal={()=> setIsVisible(false)}
                    order={order}
                />
            )}
            { isVisible2 && (
                <OrderTrackModal 
                    closeModal={()=> setIsVisible2(false)}
                    order={order}
                />
            )}
       </View>
    )
}

const styles = StyleSheet.create({
    
})

export default OrderItem;