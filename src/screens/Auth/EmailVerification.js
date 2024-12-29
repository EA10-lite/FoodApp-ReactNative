import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import Header from "../../components/auth/Header";
import colors from "../../styles/colors";
import Input from "../../components/forms/Input";
import Submit from "../../components/forms/Button";
import { forgot_password } from "../../schema/auth";

const EmailVerification = ({navigation}) => {
    const handleLogin = (values) => {
        console.log(values);
    }

    return (
        <SafeAreaView style={styles.email_verification}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        title={"Verification"}
                        subtitle={"We've sent a code to you email example@gmail.com"}
                        goBack={()=> navigation.goBack()}
                    />
                </View>

                <View style={styles.body}>
                    <Formik
                        initialValues={{ code: "" }}
                        validationSchema={forgot_password}
                        onSubmit={(values) => handleLogin(values)}
                    >
                        {()=> (
                            <View style={styles.form}>
                                <Input 
                                    type="numeric"
                                    label="Code"
                                    name="code"
                                />

                                <Submit 
                                    title="Verify"
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
    email_verification: {
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

export default EmailVerification;