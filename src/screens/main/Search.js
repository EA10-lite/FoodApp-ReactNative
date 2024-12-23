import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../styles/colors";
import { Food } from "../../compnents/cards";

const Search = () => {
    const [search, setSearch] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <View style={styles.header}>
                    <View style={styles.left}>
                        <View style={styles.menu}>
                            <Image source={require("../../../assets/img/Back.png")} />
                        </View>

                        <Text style={styles.heading}>Search</Text>
                    </View>

                    <View style={styles.right}>
                        <View style={styles.cart}>
                            <Image source={require("../../../assets/img/shopping-bag.png")} style={styles.icon} />
                        </View>
                    </View>
                </View>

                <View style={styles.search}>
                    <View style={styles.input_box}>
                        <Image source={require("../../../assets/img/search-alt.png")} style={{ width: 15, height: 15 }} />
                        <TextInput 
                            placeholder="Search for restaurant, food etc."
                            value={search}
                            onChangeText={setSearch}
                            autoFocus={true}
                            style={styles.input}
                        />

                        { search?.length > 0 && (
                            <Image source={require("../../../assets/img/cancel.png")} style={styles.icon} />
                        )}
                    </View>
                </View>
            </View>

            <ScrollView style={styles.body}>
                <View style={styles.field}>
                    <Text style={styles.title}>Recent Search</Text>
                    <View style={styles.row}>
                        {["Burger", "Pizza", "Chicken"].map((word, index)=> (
                            <View style={styles.recent} key={index}>
                                <Text>{word}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.field}>
                    <Text style={styles.title}>Suggested Restaurants</Text>

                    <View style={styles.items}>
                        {[
                            { name: "Spicy Burger", rating: 4.5 },
                            { name: "Burger Burito", rating: 4.7 },
                            { name: "Pizza Joint", rating: 4.2 }
                        ].map((restaurant, index)=> (
                            <View style={[styles.item, styles.restaurant, styles.row]} key={index}>
                                <View style={styles.img_box}>
                                    <Image source={require("../../../assets/img/restaurant.jpg")} style={styles.img} />
                                </View>
                                <View style={styles.details}>
                                    <Text style={styles.name}>{ restaurant.name }</Text>
                                    <View style={styles.row}>
                                        <Image source={require("../../../assets/img/Star.png")} style={{ width: 15, height: 15 }} />
                                        <Text style={styles.rating}>{restaurant.rating}</Text>  
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.field}>
                    <Text style={styles.title}>Popular Fast Food</Text>

                    <View style={styles.foods}>
                        {[
                            { name: "Spicy Burger", price: 80 },
                            { name: "Burger Burito", price: 100 },
                            { name: "Pizza Joint", price: 65 }
                        ].map((food, index)=> (
                            <Food 
                                key={index}
                                name={food.name}
                                price={food.price}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8fa",
    },
    head: {
        padding: 16,
    },
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
        width: '100%',
        marginBottom: 16,
    },
    left: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        flexDirection: "row",
        gap: 8,
    },
    menu: {
        width: 44,
        height: 44,
        borderRadius: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ECF0F4",
    },
    cart: {
        width: 44,
        height: 44,
        backgroundColor: colors.dark,
        borderRadius: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: 500,
        color: colors.dark,
    },

    search: {},
    input_box: {
        backgroundColor: "#ECF0F4",
        padding: 16, 
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
    },
    input: {
        fontSize: 14,
        fontWeight: 300,
        flexGrow: 1,
    },
    icon: {
        width: 20,
        height: 20,
        objectFit: "cover"
    },

    body: {
        padding: 16,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    field: {
        marginBottom: 24,
    },
    item: {
        marginBottom: 12
    },
    restaurant: {
        borderBottomWidth: 0.5,
        borderColor: "#EBEBEB",
        paddingBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 400, 
        color: colors.dark,
        marginBottom: 12,
    },
    img: {
        width: 80, 
        height: 66,
        borderRadius: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 400,
        color: "#32343E",
        marginBottom: 3,
    },
    rating: {
        fontSize: 16,
    },
    foods: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "5%",
    },
    recent: {
        borderWidth: 1,
        borderColor: "#EDEDED",
        borderRadius: 33,
        paddingVertical: 12,
        paddingHorizontal: 26

    }

});

export default Search;