import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Category, Food } from "../../compnents/cards";
import { Header } from "../../compnents/screens";
import colors from "../../styles/colors";

const Restaurant = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.head}>
                        <Header 
                            img_source={require("../../../assets/img/restaurant.jpg")}
                        />
                        <View style={styles.details}>
                            <Text style={styles.title}>One Place Joint</Text>
                            <Text style={styles.subtitle}>Rose Garden  Avenue</Text>
                        </View>
                    </View> 

                    <View style={styles.body}>
                        <View style={[styles.row, styles.feature]}>
                            <View style={[styles.row, styles.rating]}>
                                <Image source={require("../../../assets/img/Star.png")} style={styles.icon} />
                                <Text style={styles.p}>4.7</Text>
                            </View>
                            <View style={[styles.row, styles.service]}>
                                <Image source={require("../../../assets/img/Delivery.png")} style={styles.truck} />
                                <Text style={styles.p}>Free</Text>
                            </View>
                            <View style={[styles.row, styles.time]}>
                                <Image source={require("../../../assets/img/Clock.png")} style={styles.icon} />
                                <Text style={styles.p}>20min</Text>
                            </View>
                        </View>

                        <Text style={styles.desc}>Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</Text>

                        <View style={[styles.row, styles.category]}>
                            {["Burger", "Pizza", "Cheese", "Chicken"].map((category, index)=> (
                                <Category 
                                    category={category}
                                    index={index}
                                    key={index}
                                />
                            ))}
                        </View>

                        <View style={styles.foods}>
                            <Text style={styles.title}>Burger (4)</Text>
                            <View style={[styles.row, styles.food_list]}>
                                {[
                                    { name: "Burger-Burito", price: 40}, 
                                    { name: "Sliced Burger", price: 88 },
                                    { name: "Cheese Burger", price: 1200 },
                                ].map((food, index)=> (
                                    <Food
                                        key={index}
                                        name={food.name}
                                        price={food.price}
                                    />
                                ))}
                            </View>
                        </View>
                    </View> 
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8fa",
        paddingBottom: 16,
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
    icon: {
        objectFit: "cover",
        width: 20,
        height: 20,
    },
    truck: {
        width: 24,
        height: 16,
    },
    desc: {
        color: "#A0A5BA",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 24,
    },
    ingredients: {
        marginVertical: 24,
    },
    ingredient: {
        width: 60,
        height: 60, 
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary_light,
    },
    heading: {
        textTransform: "uppercase",
        fontSize: 13,
        fontWeight: 300,
        marginBottom: 10,
        color: "#A0A5BA",
        letterSpacing: 0.5,
    },
    category: {
        marginVertical: 24,
    },
    food_list: {
        gap: '5%',
        flexWrap: 'wrap',
    },
})

export default Restaurant;