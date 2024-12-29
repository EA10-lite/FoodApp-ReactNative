import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { SafeAreaView, View, Text, StyleSheet, TouchableHighlight, Button } from "react-native";
import { Formik } from "formik";
import Header from "../../components/auth/Header";
import colors from "../../styles/colors";
import {Input, Submit} from "../../components/forms";
import { reset_password } from "../../schema/auth";
import { resetUserPassword } from "../../services/auth";

const ResetPassword = ({navigation}) => {

    const [loading, setLoading] = useState(false);
    const handleResetPassword =  async (values) => {
        try {
            setLoading(true);
            const response = await resetUserPassword(values);
            if(response?.success) {
                showToast("success", "Password Reset", "Password successfully updated!")
            }
            else {
                throw new Error(response?.message);
            }
        } catch (error) {
            showToast("error", "Password Reset Failed",  error?.response?.data?.message || error?.message || "Something failed")
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
        <SafeAreaView style={styles.login}>
            <View style={styles.container}>
                <Toast position="top" topOffset={50} />
                <View style={styles.head}>
                    <Header 
                        title={"Reset Password"}
                    />
                </View>

                <View style={styles.body}>
                <Formik
                    initialValues={{ new_password: "", confirm_password: "" }}
                    validationSchema={reset_password}
                    onSubmit={(values) => handleResetPassword(values)}
                >
                    {()=> (
                        <View style={styles.form}>
                            <Input 
                                type="default"
                                placeholder="Enter your password"
                                label="New Password"
                                secureText={true}
                                name="new_password"
                            />
                            <Input 
                                type="default"
                                placeholder="Enter your password"
                                label="Re-type Password"
                                secureText={true}
                                name="confirm_password"
                            />

                            <Submit 
                                title="log in"
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
    reset_password: {
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
});

export default ResetPassword;