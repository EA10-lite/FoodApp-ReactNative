import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import colors from "../styles/colors";

const Onboarding = ({navigation}) => {
    const [onboardingStep, setOnboardingStep] = useState(1);


    const handleOnboardingStep = () => {
        if (onboardingStep < 4) {
            setOnboardingStep(onboardingStep + 1);
        }
        else {
            // Navigate to Auth screen
            navigation.navigate("Login");
        }
    }

    useEffect(()=> {
    } ,[])



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.onboarding}>
                <View style={styles.onboarding_img}></View>
                <View style={styles.onboarding_text}>
                    <Text style={styles.title}>{ onboardingStep === 1 ? "All your favorites" : onboardingStep === 2 ? "Order from choosen chef" : "Free delivery offers"}</Text>
                    <Text style={styles.subtitle}>Get all your loved foods in one once place, you just place the orer we do the rest</Text>

                    <View style={styles.paginations}>
                        <View style={ onboardingStep === 1 ? styles.active_pagination  : styles.pagination}></View>
                        <View style={ onboardingStep === 2 ? styles.active_pagination  : styles.pagination}></View>
                        <View style={ onboardingStep === 3 ? styles.active_pagination  : styles.pagination}></View>
                    </View>

                    <TouchableOpacity style={styles.next_btn} onPress={handleOnboardingStep}>
                        <Text style={styles.next_btn_text}> Next </Text>
                    </TouchableOpacity>
                    <Button 
                        title="Skip" color={colors.secondary}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    onboarding: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 20,
    },
    onboarding_img: {
        flexGrow: 1,
    },
    onboarding_text: {
        textAlign: "center",
    },
    title: {
        fontWeight: "600",
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 16,
    },
    subtitle: {
        fontWeight: 300,
        fontSize: 16,
        lineHeight: 24,
        color: colors.secondary,
        textAlign: 'center',
        marginBottom: 16,
    },
    next_btn: {
        backgroundColor: colors.primary,
        width: '100%',
        borderRadius: 12,
        padding: 16,
    },
    next_btn_text: {
        fontSize: 16,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 600,
    },
    paginations: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        gap: 8
    },
    pagination: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
        opacity: 0.6,
    },
    active_pagination: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
    }
})

export default Onboarding;