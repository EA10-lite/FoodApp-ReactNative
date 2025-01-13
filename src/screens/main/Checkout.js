import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useGlobalContext } from "../../context/GlobalContext";
import { useCartContext } from "../../context/CartContext";

const Checkout = ({ navigation }) => {
    const { user } = useGlobalContext();
    const { cart } = useCartContext();

    return (
        <SafeAreaView>
            <View> 
                <Button title="Back" onPress={()=> navigation.goBack()} />
                <Button title="Checkout" onPress={()=> navigation.navigate("Success")} />
                <Text> Chekcout page </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});

export default Checkout;