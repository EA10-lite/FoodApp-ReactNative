import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";
import colors from "../../styles/colors";
import { useFormikContext } from "formik";

const Select = ({ label, options, name, placeholder }) => {
    const { values, errors, handleChange, setFieldValue } = useFormikContext();
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>


        <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setIsPickerVisible(true)}
        >
            <Text style={styles.dropdownText}>
            {values[name] || placeholder}
            </Text>
        </TouchableOpacity>


        <Modal
            visible={isPickerVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setIsPickerVisible(false)}
        >
            <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
                <Picker
                selectedValue={values[name]}
                onValueChange={(itemValue) => {
                    setFieldValue(name, itemValue);
                    setIsPickerVisible(false);
                }}
                >
                    { options?.map((option, index)=> (
                        <Picker.Item label={option} value={option} key={index} />
                    ))}
                </Picker>
            </View>
            </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    label: {
        marginBottom: 8,
        fontSize: 13,
        fontWeight: 400,
        color: colors.secondary,
        textTransform: 'uppercase'
    },
    dropdown: {
        backgroundColor: "#F0F5FA",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 18,
    },
    dropdownText: {
        fontSize: 15,
    },
    selected: {
        marginTop: 10,
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    pickerContainer: {
        backgroundColor: "#fff",
        paddingBottom: 20,
        paddingTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});

export default Select;
