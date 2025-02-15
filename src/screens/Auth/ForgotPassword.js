import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import Header from "../../components/auth/Header";
import colors from "../../styles/colors";
import Input from "../../components/forms/Input";
import Submit from "../../components/forms/Button";
import { forgot_password } from "../../schema/auth";
import { forgotUserPassword } from "../../services/auth";

const ForgotPassword = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const handleForgotPassword =  async (values) => {
        try {
            setLoading(true);
            const response = await forgotUserPassword(values);
            if(response?.success) {
                showToast("success", "Email sent", "Verification email sent to" + values.email)
            }
            else {
                throw new Error(response?.message);
            }
        } catch (error) {
            showToast("error", "Verification Failed",  error?.response?.data?.message || error?.message || "Something failed")
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
        <SafeAreaView style={styles.forgot_password}>
            <View style={styles.container}>
                <Toast position="top" topOffset={50} />
                <View style={styles.head}>
                    <Header 
                        title={"Forgot Password"}
                        goBack={()=> navigation.goBack()}
                    />
                </View>

                <View style={styles.body}>
                <Formik
                    initialValues={{ email: "" }}
                    validationSchema={forgot_password}
                    onSubmit={(values) => handleForgotPassword(values)}
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
                                loading={loading}
                            />
                        </View>
                    )}
                </Formik>
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
});

export default ForgotPassword;