import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { getDoc, getFirestore } from 'firebase/firestore'
import { deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const Task = ({ id, title, description, createdAt }) => {
  const navigation = useNavigation()
  const database = getFirestore()
  const onDeletePress = () => {

  }

  const onEditPress = async () => {
    const docRef = doc(database, 'tasks', id);
    const data = await getDoc(docRef)
    navigation.navigate('Add',{...data.data(),id})
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text>Titulo : {title}</Text>
        <Text>Descripcion : {description}</Text>
        <Text>Creado el: {new Date(createdAt).toLocaleDateString()}</Text>
      </View>
      <View style={styles.taskActions}>
        <Button color="success"
          onPress={onEditPress}
        >Editar</Button>
        <Button color="error"
          onPress={onDeletePress}
        >Eliminar</Button>
      </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  taskContainer: {
    padding: 10,
    borderBottomColor: 'black',
    borderWidth: 1
  },
  taskActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})