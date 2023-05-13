import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { database } from "../../firebase";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Task from "../components/Task";

import { FAB } from "@rneui/themed";

const HomeScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation()
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getLoginUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token.length < 1) {
        return navigation.navigate('Login')
      }
    }
    getLoginUser();

    // const collectionRef = collection(database, 'tasks');
    // const qry = query(collectionRef)
    // const unsubscribe = onSnapshot(qry, querySnapshot => {
    //   setTasks(querySnapshot.docs.map(doc => ({
    //     id: doc.id,
    //     title: doc.data().title,
    //     description: doc.data().description,
    //     createdAt: doc.data().createdAt,
    //   })))
    // })
    // return unsubscribe
  }, [params]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View Style={styles.flex}>
          <Text style={styles.headerTitle}>Welcome:</Text>
          <Text style={styles.emailText}>{params.email}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            Alert.alert('Desea cerrar sesion?', '', [
              {
                text: 'Si',
                onPress: async () => { await AsyncStorage.removeItem('token') }
              }, {
                text: 'No',
                onPress: () => console.log('canceled'),
                style: 'cancel'
              }
            ], { cancelable: false })
          }}
        >
          <Text style={styles.buttonExit}>Cerrar sesion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          {tasks.map((task)=>{
            return <Task {...task} key={task.id} />
          })}
        </View>
        <FAB
          visible={true}
          icon={{ name: 'add', color: 'white' }}
          color="green"
          style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 10 }}
          onPress={() => { navigation.navigate('Add') }}
        />

      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    flex: 1,
  },
  headerContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: 'space-between'
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  emailText: {
    fontWeight: "bold",
    color: "#0782f9"
  },
  buttonContainer: {
    backgroundColor: '#0782f9',
    padding: 10,
    borderRadius: 10
  },
  buttonExit: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    gap: 4
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  addContainer: {
    backgroundColor: '#0782f9',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5
  },
  textAdd: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#fff'
  }
});
