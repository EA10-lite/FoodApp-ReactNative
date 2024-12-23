import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";

import colors from "../../styles/colors";

const Submit = ({ title }) => {
    const {handleSubmit} = useFormikContext();
    return (
        <View style={styles.action_btn}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.button_text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    action_btn: {
        marginBottom: 32,
    },
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        borderRadius: 12,
        padding: 18,
    },
    button_text: {
        color: colors.white,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
})

export default Submit;