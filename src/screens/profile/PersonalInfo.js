import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Header } from "../../compnents/profile";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../styles/colors";

const Field = ({ title, url, subtitle }) => {
    return (
        <View style={styles.item}>
            <View style={[styles.row, styles.btn]}>
                <View style={[styles.left, styles.row]}>
                    <View style={[styles.img, styles.row]}>
                        <Image source={url} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const PersonalInfo = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        isEditable={false}
                        canEdit={true}
                        goToEdit={()=> navigation.navigate("EditPersonalInfo")}
                        goBack={()=> navigation.goBack()}
                        title="Personal Info"
                    />
                </View>

                <View style={styles.body}>
                    <View style={styles.field}>
                        <Field 
                            title="Full name"
                            subtitle="Chris Emmanuel"
                            url={require("../../../assets/img/user.png")}
                        />
                        <Field 
                            title="Email"
                            subtitle="chris28@gmail.com"
                            url={require("../../../assets/img/mail.png")}
                        />
                        <Field 
                            title="Phone"
                            subtitle="+234 7061 326 122"
                            url={require("../../../assets/img/Call.png")}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    head: {
        marginBottom: 32,
    },
    body: {
        padding: 16,
    },
    field: {
        backgroundColor: "#F6F8FA",
        borderRadius: 12,
        marginBottom: 32,
        padding: 12,
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
    title: {
        fontSize: 13,
        fontWeight: 400,
        color: "#32343E",
        textTransform: "uppercase",
    },
    subtitle: {
        fontSize: 14,
        color: "#6B6E82",
    }
});

export default PersonalInfo;