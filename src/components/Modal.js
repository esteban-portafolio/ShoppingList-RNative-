import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Modal = ({isVisible, actionDeleteItem, itemSelected, onDismissModal}) => {
    return (
        <NewModal animationType="fade" transparent={true} visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalStyle}>
                    <Text style={styles.modalTextStyle}>{itemSelected}</Text>
                    <Button title='Dismiss' onPress={() => onDismissModal()} />
                    <Button color={"red"} title='Borrar' onPress={() => actionDeleteItem()} />
                </View>
            </View>
        </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    modalTextStyle: {
        fontSize: 25,
        marginRight: 20,
    },
    modalStyle: {
        padding: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: "yellow"
    }
})