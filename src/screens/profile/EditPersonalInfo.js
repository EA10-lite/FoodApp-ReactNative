import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Header, Map } from "../../components/profile";
import { Formik } from "formik";
import { Input, Submit, Textbox } from "../../components/forms";
import colors from "../../styles/colors";
import { profile_schema } from "../../schema/profile";
import { useGlobalContext } from "../../context/GlobalContext";
import { updateProfile } from "../../services/profile";

const EditPersonalInfo = ({navigation}) => {
    const { user } = useGlobalContext();

    const [loading, setLoading] = useState(false);
    const submitDetails = async (values) => {
        try {
            setLoading(true);
            const response = await updateProfile(values);
            if(response?.success) {
                showToast("success", "Profile Update", "Successfully updated your profile!")
            }
            else {
                throw new Error(response?.message);
            }
        } catch (error) {
            showToast("error", "Profile Update",  error?.response?.data?.message || error?.message || "Failed to update profile")
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
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        isEditable={true}
                        goBack={()=> navigation.goBack()}
                        title="Edit Personal Info"
                    />
                </View>

                <Toast position="top" topOffset={50} style={styles.toast} />
                <ScrollView style={styles.view}>
                    <View style={styles.form}>
                        <Formik
                            initialValues={{ 
                                name: user?.name || "", 
                                phone: user?.phone || "", 
                                about: user?.about || "",
                                street: user?.address?.street || "",
                                state: user?.address?.state || "Lagos",
                                city: user?.address?.city || "Ikorodu",
                                zipcode: user?.address?.zipcode ||"",
                                longitude: user?.address?.longitude || "18.785973",
                                latitude: user?.address?.latitude || "18.785973",
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
                                        placeholder="eg: +234 7061 326 122"
                                        label="Phone"
                                        name="phone"
                                    />
                                    <Textbox 
                                        name="about"
                                        placeholder="Tell us little about yourself (max: 100 words)"
                                        label="About (optional)"
                                    />

                                    {/* <Map /> */}
                                    
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
                                    <Input 
                                        type="numeric"
                                        label="Zipcode"
                                        name="zipcode"
                                    />

                                    <Submit title="Submit" loading={loading} />
                                </>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </View>
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
    toast: {
        zIndex: 100,
    }
});

export default EditPersonalInfo;