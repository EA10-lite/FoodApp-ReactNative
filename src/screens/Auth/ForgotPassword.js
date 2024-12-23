import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Header from "../compnents/auth/Header";
import colors from "../styles/colors";
import Input from "../compnents/forms/Input";
import Submit from "../compnents/forms/Button";
import { Formik } from "formik";
import { forgot_password } from "../schema/auth";

const ForgotPassword = ({navigation}) => {
    const handleLogin = (values) => {
        console.log(values);
    }

    return (
        <SafeAreaView style={styles.forgot_password}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        title={"Forgot Password"}
                    />
                </View>

                <View style={styles.body}>
                <Formik
                    initialValues={{ email: "" }}
                    validationSchema={forgot_password}
                    onSubmit={(values) => handleLogin(values)}
                >
                    {()=> (
                        <View style={styles.form}>
                            <Input 
                                type="email-address"
                                placeholder="eg: janedoe@gmail.com"
                                label="Email"
                                name="email"
                            />

                            <Submit 
                                title="Send code"
                            />
                        </View>
                    )}
                </Formik>
                    <Text style={{textAlign: 'center'}}> Remember Password? <Text style={styles.link} onPress={()=> navigation.navigate("Login")}> Login </Text> </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    forgot_password: {
        flex: 1,
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
        marginBottom: 24,
    },
    link: {
        color: colors.primary
    }
});

export default ForgotPassword;