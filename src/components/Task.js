import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { database } from '../../firebase'
import { deleteDoc, updateDoc, doc } from 'firebase/firestore'

const Task = ({ title, description, createdAt }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{new Date(createdAt).toLocaleDateString()}</Text>
      </View>
      {/* <View>
      <Button color="success">Editar</Button>
      <Button color="error">Eliminar</Button>
      </View> */}
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