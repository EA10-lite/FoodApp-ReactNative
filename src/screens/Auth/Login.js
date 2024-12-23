import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Formik } from "formik";
import Header from "../../compnents/auth/Header";
import colors from "../../styles/colors";
import {Input, Submit, Checkbox} from "../../compnents/forms";
import { login_schema } from "../../schema/auth";

const Login = ({navigation}) => {
    const handleLogin = (values) => {
        console.log(values);
    }

    return (
        <SafeAreaView style={styles.login}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        title={"Login"}
                        subtitle={"Please sign in to your existing account!"}
                    />
                </View>

                <View style={styles.body}>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={login_schema}
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

                            <Input 
                                type="default"
                                placeholder="Enter your password"
                                label="Password"
                                secureText={true}
                                name="password"
                            />

                            <View style={styles.row}>
                                <Checkbox 
                                    label="Remember me"
                                />
                                <TouchableHighlight style={styles.btn} onPress={()=> navigation.navigate("ForgotPassword")}>
                                    <Text style={styles.link}> Forgot Password </Text>
                                </TouchableHighlight>
                            </View>

                            <Submit 
                                title="log in"
                            />
                        </View>
                    )}
                </Formik>
                    <Text style={{textAlign: 'center'}}> Don't have an account? <Text style={styles.link} onPress={()=> navigation.navigate("Signup")}> Sign up</Text> </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    login: {
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
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    }
});

export default Login;