import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Food } from "../../components/cards";
import { Header } from "../../components/screens";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import colors from "../../styles/colors";
import food from "../../data/food";

const Restaurant = ({navigation, route}) => {
    const { name, address, pictures, categories, about } = route.params;
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.head}>
                        <Header 
                            img_source={pictures[0]}
                            goBack={()=> navigation.goBack()}
                            data={{name, address, about, categories, pictures}}
                            type={"Restaurant"}
                        />
                        <View style={styles.details}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.subtitle}>{address}</Text>
                        </View>
                    </View> 

                    <View style={styles.body}>
                        <View style={[styles.row, styles.features]}>
                            <View style={[styles.row, styles.feature]}>
                                <EvilIcon name="star" size={28} color={colors.primary} />
                                <Text style={styles.p}> 4.7 </Text>
                            </View>
                            <View style={[styles.row, styles.feature]}>
                                <FeatherIcon name="truck" size={22} color={colors.primary} />
                                <Text style={styles.p}>Free</Text>
                            </View>
                            <View style={[styles.row, styles.feature]}>
                                <MaterialIcon name="access-time" size={22} color={colors.primary} />
                                <Text style={styles.p}>20 mins</Text>
                            </View>
                        </View>

                        <Text style={styles.desc}>{about}</Text>

                        <View style={[styles.row, styles.categories]}>
                        </View>

                        <View style={styles.foods}>
                            <Text style={styles.title}>Burger ({food.filter(item=> item.restaurant === name).length})</Text>
                            <View style={[styles.row, styles.food_list]}>
                                {food.filter(item=> item.restaurant === name)?.map((food, index)=> (
                                    <Food
                                        key={index}
                                        data={food}
                                        handlePress={()=> navigation.navigate("FoodDetails", food)}
                                        isRestaurantPage={true}
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
    features: {
        gap: 24,
        marginBottom: 16,
        justifyContent: "flex-start"
    },
    feature: {
        gap: 5,
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
    categories: {
        marginVertical: 24,
    },
    category: {
        borderBlockColor: colors.grey,
        borderRadius: 133.33,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    category_text: {
        fontSize: 14,
    },
    food_list: {
        gap: '5%',
        flexWrap: 'wrap',
    },
})

export default Restaurant;