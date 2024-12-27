import React from "react";
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Header } from "../../components/profile";
import { Formik } from "formik";
import { Input, Submit, Textbox } from "../../components/forms";
import colors from "../../styles/colors";

const EditPersonalInfo = ({navigation}) => {
    const submitDetails = async (values) => {
        console.log(values)
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.view}>
                <View style={styles.head}>
                    <Header 
                        isEditable={true}
                        goBack={()=> navigation.goBack()}
                        title="Edit Personal Info"
                    />
                </View>

                <View style={styles.form}>
                    <Formik
                        initialValues={{ name: "", email: "", phone: "", bio: "" }}
                        onSubmit={(values)=> submitDetails(values)}
                    >
                        {()=> (
                            <>
                                <Input 
                                    name="name"
                                    type="default"
                                    placeholder="example: John Doe"
                                    label="Name"
                                />
                                <Input 
                                    type="email-address"
                                    placeholder="eg: janedoe@gmail.com"
                                    label="Email"
                                    name="email"
                                />
                                <Input 
                                    type="email-address"
                                    placeholder="eg: +234 7061 326 122"
                                    label="Phone"
                                    name="phone"
                                />
                                <Textbox 
                                    name="bio"
                                    placeholder="Tell us little about yourself (max: 100 words)"
                                    label="Bio"
                                />

                                <Submit title="Submit" />
                            </>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    form: {
        paddingHorizontal: 16,
        marginTop: 40,
    },
});

export default EditPersonalInfo;