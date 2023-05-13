import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { database } from '../../firebase'
import { deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { Button } from '@rneui/base'

const Task = ({ title, description, createdAt }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Titulo : {title}</Text>
        <Text>Descripcion : {description}</Text>
        <Text>Creado el: {new Date(createdAt).toLocaleDateString()}</Text>
      </View>
      <View>
        <Button color="success">Editar</Button>
        <Button color="error">Eliminar</Button>
      </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})