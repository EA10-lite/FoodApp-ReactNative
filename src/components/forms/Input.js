import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import colors from "../../styles/colors";
import { useFormikContext } from "formik";

const Input = ({ label, name, placeholder, type="default", secureText }) => {
    const { values, handleChange, errors, touched } = useFormikContext();

    return (
        <View style={styles.input_box}>
            <Text style={[styles.label, (errors[name] && touched[name]) && styles.error_label]}>{ label }</Text>
            <TextInput 
                placeholder={placeholder}
                keyboardType={type}
                onChangeText={handleChange(name)}
                style={[styles.input, (errors[name] && touched[name]) && styles.error_input]}
                secureTextEntry={secureText}
                value={values[name]}
            />

            { errors[name] && touched[name] && <Text style={styles.error}>{ errors[name]} </Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input_box: {
        marginBottom: 32,
    },
    input: {
        backgroundColor: "#F0F5FA",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 18,
    },
    label: {
        marginBottom: 8,
        fontSize: 13,
        fontWeight: 400,
        color: colors.secondary,
        textTransform: 'uppercase'
    },
    error: {
        color: colors.error
    },
    error_input: {
        borderColor: colors.error,
        borderWidth: 1,
    },
    error_label: {
        color: colors.error,
    }
})

export default Input;