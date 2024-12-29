import React from "react";
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Header, Map } from "../../components/profile";
import { Formik } from "formik";
import { Input, Submit, Textbox } from "../../components/forms";
import colors from "../../styles/colors";
import { profile_schema } from "../../schema/profile";

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
                        initialValues={{ 
                            name: "", 
                            email: "", 
                            phone: "", 
                            about: "",
                            street: "",
                            state: "",
                            city: "",
                            zipcode: "",
                            longitude: "",
                            latitude: "",
                        }}
                        onSubmit={(values)=> submitDetails(values)}
                        validationSchema={profile_schema}
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
                                    name="about"
                                    placeholder="Tell us little about yourself (max: 100 words)"
                                    label="About (optional)"
                                />

                                <Map />
                                
                                <Input 
                                    type="default"
                                    placeholder="eg: 8, Shakiru Street"
                                    label="Street"
                                    name="street"
                                />

                                <Input 
                                    type="numeric"
                                    label="Longitude"
                                    name="longitude"
                                />

                                <Input 
                                    type="numeric"
                                    label="Latitude"
                                    name="latitude"
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
    },
});

export default EditPersonalInfo;