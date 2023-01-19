import { Button, StyleSheet, TextInput, View } from 'react-native'

import React from 'react'

const AddItem = ({onChange, textValue, onAddItem}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Ingresa tu Producto'
                style={styles.addItemInput}
                onChangeText={onChange}
                value={textValue}
            />
            <Button color={"black"} title="Agregar" onPress={onAddItem} />
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    addItemInput: {
        borderColor: "black",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: 220,
        marginRight: 10
    },
})