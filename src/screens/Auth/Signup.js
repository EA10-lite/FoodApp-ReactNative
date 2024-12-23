import React from "react";
import { Formik } from "formik";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import Header from "../compnents/auth/Header";
import colors from "../styles/colors";
import Input from "../compnents/forms/Input";
import Submit from "../compnents/forms/Button";

import { signup_schema } from "../schema/auth";

const Signup = ({navigation}) => {
    const handleSignup = (values) => {
        console.log(values);
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.signup}>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <Header 
                            title={"Signup"}
                            subtitle={"Please sign up to get started!"}
                        />
                    </View>

                    <View style={styles.body}>
                        <ScrollView>
                            <Formik
                                initialValues={{ name: "", email: "", password: "", confirm_password: "" }}
                                validationSchema={signup_schema}
                                onSubmit={(values) => handleSignup(values)}
                            >
                                {()=> (
                                    <View style={styles.form}>
                                        <Input 
                                            type="default"
                                            placeholder="Jane Doe"
                                            label="Name"
                                            name="name"
                                        />

                                        <Input 
                                            type="email-address"
                                            placeholder="eg: janedoe@gmail.com"
                                            label="Email"
                                            name="email"
                                        />

                                        <Input 
                                            type="default"
                                            placeholder="Enter your password"
                                            label="Password"
                                            secureText={true}
                                            name="password"
                                        />

                                        <Input 
                                            type="default"
                                            placeholder="Confirm Password"
                                            label="Re-type Password"
                                            secureText={true}
                                            name="confirm_password"
                                        />

                                        <Submit 
                                            title="Sign up"
                                        />
                                    </View>
                                )}
                            </Formik>
                            <Text style={{textAlign: 'center'}}> Already have an account? <Text style={styles.link} onPress={()=> navigation.navigate("Login")}> Sign in</Text> </Text>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    signup: {
        flex: 1,
    },
    ScrollView: {

    },
    container : {
        backgroundColor: colors.dark,
        flex: 1,
    },
    head: {
        height: '40%',
    },
    body: {
        height: '70%',
        backgroundColor: colors.white,
        marginTop: '-10%',
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        padding: 24,
    },
    form: {
        marginBottom: 12,
    },
    link: {
        color: colors.primary
    },
});

export default Signup;