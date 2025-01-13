import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const OrderDetailsModal = ({ closeModal, isOpen, order }) => {
    return (
        <View>
            <Modal
                visible={isOpen}
                transparent={true}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.foodContainer}>
                        <View style={[styles.details, styles.head]}>
                            <TouchableOpacity style={styles.icon} onPress={closeModal}>
                                <Icon name="close" size={18} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles= StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    foodContainer: {
        backgroundColor: "#fff",
        minHeight: "65%",
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        overflow: "hidden",
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ECF0F4"
    },
});

export default OrderDetailsModal;