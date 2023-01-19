import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import AddItem from './src/components/AddItem';
import Checkbox from 'expo-checkbox';
//import Icon from 'react-native-vector-icons/Feather';
import Modal from './src/components/Modal';

//import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [textItem, setTextItem] = useState('')
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [isSelected, setSelection] = useState(false)

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem("")
  }

  const handleModal = (item) => {
    //console.log(item)
    setItemSelected(item)
    setModalVisible(true)
  }

  const onHandleDelete = (item) => {
    //console.log(item)
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      {/* <Icon style={styles.taskStyle}
        name={itemSelected ? "square" : "check"}
        size={30} color='#900'
        onPress={() => handleChecked(item)}
      /> */}
      <TouchableOpacity>
        <Checkbox 
          onPress={() => handleModal(item)}
          value={isSelected}
          onValueChange={setSelection}
          style={styles.taskStyle}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 20}}>{item}</Text>
      <Button color={"green"} title='Editar' onPress={() => handleModal(item)} />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista de Compras</Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          key={item => item.id}
        //keyExtractor={item => item.id}
        />
      </View>

      <Modal isVisible={modalVisible}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        itemSelected={itemSelected}
        onDismissModal={() => setModalVisible(false)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EAF2"
  },
  titleContainer: {
    height: 200,
    padding: 50,
    paddingTop: 80,
    backgroundColor: "#20CE15",
  },
  title: {
    marginBottom: 20,
    textDecorationLine: "underline",
    fontSize: 24,
    color: "white",
    paddingLeft: 50
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 30,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    padding: 10,
    marginBottom: 25,
    justifyContent: "space-between",
    alignItems: "center",
    textDecorationLine: "bold",
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    elevation: 3
  },
  taskStyle: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }

}
);
