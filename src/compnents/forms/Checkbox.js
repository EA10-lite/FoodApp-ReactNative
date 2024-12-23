import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";

const Checkbox = ({ label }) => {
    const [check, setCheck] = useState(false);
    return (
        <View style={styles.checkbox}>
            <TouchableOpacity onPress={()=> setCheck(!check)}>
                <View style={[styles.box, check && styles.active]}></View>
            </TouchableOpacity>
            <Text style={styles.label}>{ label }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    box: {
        width:20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.secondary
    },
    active: {
        borderColor: colors.primary,
        backgroundColor: colors.primary
    },
    label: {
        fontSize: 13,
        fontWeight: 400,
        color: colors.secondary,
    },
})

export default Checkbox;