import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { Input, Button, Icon } from '@rneui/themed';
// import { database } from 'firebase/database'
import { database } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native';


const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  const onSubmit = async () => {
    if ([title.trim(), description.trim()].includes('')) {
      return Alert.alert('Complete los campos obligatorios.')
    }
    setLoading(true)
    const data = await addDoc(collection(database, 'tasks'), { title, description, createdAt: Date.now() });
    setLoading(false)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Agregar nueva Tarea</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.formTitle}>Titulo de la tarea</Text>
          <Input
            placeholder='Titulo *'
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.formTitle}>Descripcion de la tarea</Text>
          <Input
            placeholder='Descripcion *'
            style={styles.input}
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          {
            !loading ? (
              <Button radius={'md'} type="solid"
                onPress={onSubmit}
              >
                Guardar
                <Icon name="save" color="white" />
              </Button>
            ) :
              (
                <Button
                  title="Login"
                  loading={loading}
                  loadingProps={{
                    size: 'small',
                    color: 'rgba(111, 202, 186, 1)',
                  }}
                  titleStyle={{ fontWeight: '700' }}
                  buttonStyle={{
                    backgroundColor: 'rgba(92, 99,216, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 5,
                    paddingVertical: 10,
                  }}
                  containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                  }}
                />
              )
          }

        </View>
      </View>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 900,
  },
  formContainer: {
    padding: 20,
    marginTop: 10,
    width: '90%',
  },
  inputContainer: {
    gap: 10,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5
  },
  formTitle: {
    textAlign: 'center',
    fontWeight: '700'
  },
  button: {
    paddingHorizontal: 3,
    paddingVertical: 1,
    fontWeight: 'bold'
  }
})