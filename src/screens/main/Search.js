import React, { useState } from "react";
import { SafeAreaView, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useCartContext } from "../../context/CartContext";
import { Food } from "../../components/cards";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchIcon from "react-native-vector-icons/Octicons";
import colors from "../../styles/colors";
import restaurant from "../../data/restaurant";
import food from "../../data/food";

const Search = ({navigation}) => {
    const [search, setSearch] = useState("")
    const { cart } = useCartContext();

    let total_item = 0;
    for(let i = 0; i < cart.length; i++) {
        total_item += cart[i]?.quantity
    }

    return (
        <SafeAreaView style={styles.search}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.header}>
                        <View style={styles.left}>
                            <TouchableOpacity style={styles.menu} onPress={()=> navigation.goBack()}>
                                <Icon name="arrow-back-ios" size={18} color="#747783" />
                            </TouchableOpacity>

                            <Text style={styles.heading}>Search</Text>
                        </View>

                        <View style={styles.right}>
                             <TouchableOpacity style={styles.cart} onPress={()=> navigation.navigate("Cart")}>
                                <View style={styles.cart}>
                                    <Text style={styles.cart_count}>{total_item}</Text>
                                    <Icon name="shopping-cart" color="#fff" size={20} style={{marginTop: 12,}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.search_box}>
                        <View style={styles.input_box}>
                            <SearchIcon name="search" size={18} />
                            <TextInput 
                                placeholder="Search for restaurant, food etc."
                                value={search}
                                onChangeText={setSearch}
                                style={styles.input}
                            />

                            { search?.length > 0 && (
                                <Icon name="close" size={16} />
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
                            {restaurant?.slice(0,3)?.map((restaurant, index)=> (
                                <TouchableOpacity onPress={()=> navigation.navigate("RestaurantDetails", restaurant)} key={index}>
                                    <View style={[styles.item, styles.restaurant, styles.row]} key={index}>
                                        <View style={styles.img_box}>
                                            <Image src={restaurant?.pictures[0]} style={styles.img} />
                                        </View>
                                        <View style={styles.details}>
                                            <Text style={styles.name}>{restaurant?.name}</Text>
                                            <Text style={styles.address}>{restaurant?.address}</Text>  
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.title}>Popular Fast Food</Text>

                        <View style={styles.foods}>
                            {food.slice(0,4).map((food, index)=> (
                                <Food 
                                    key={index}
                                    data={food}
                                    handlePress={()=> navigation.navigate("FoodDetails", food)}
                                />
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    search: {
        flex: 1
    },
    head: {
        padding: 24,
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
    cart_count: {
        color: colors.white,
        fontSize: 13,
        fontWeight: 800, 
        position: "absolute",
        top: 6,
    },
    heading: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: 500,
        color: colors.dark,
    },
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
        padding: 24,
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
    items: {},
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
    address: {
        fontSize: 14,
        color: "#A0A5BA"
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