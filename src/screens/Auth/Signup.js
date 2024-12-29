import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { Formik } from "formik";
import { View, StyleSheet, ScrollView, SafeAreaView} from "react-native";

import Header from "../../components/auth/Header";
import { Input, Submit } from "../../components/forms";

import { signup_schema } from "../../schema/auth";
import { signupAsUser } from "../../services/auth";
import colors from "../../styles/colors";

const Signup = ({navigation}) => {

    const [loading, setLoading] = useState(false);
    const handleSignup =  async (values) => {
        try {
            setLoading(true);
            const response = await signupAsUser(values);
            if(response?.success) {
                showToast("success", "Signup Success", "Account successfully created!")
            }
            else {
                throw new Error(response?.message);
            }
        } catch (error) {
            showToast("error", "Login Failed",  error?.response?.data?.message || error?.message || "Something failed")
        } finally {
            setLoading(false);
        }
    }

     const showToast = (type, title, subtitle) => {
        Toast.show({
            type,
            text1: title,
            text2: subtitle,
        });
    }

    return (
        <SafeAreaView style={styles.signup}>
            <View style={styles.container}>
                <Toast position="top" topOffset={50} />
                <View style={styles.head}>
                    <Header 
                        title={"Signup"}
                        subtitle={"Please sign up to get started!"}
                        goBack={()=> navigation.goBack()}
                    />
                </View>

                <View style={styles.body}>
                    <ScrollView>
                        <Formik
                            initialValues={{ name: "", email: "", phone: "",  password: "", confirm_password: "" }}
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
                                        placeholder="eg: +234 7061326122"
                                        label="Phone"
                                        name="phone"
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
                                        loading={loading}
                                    />
                                </View>
                            )}
                        </Formik>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
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
        paddingVertical: 24,
    },
    form: {
        marginBottom: 12,
        paddingHorizontal: 24,
    },
});

export default Signup;