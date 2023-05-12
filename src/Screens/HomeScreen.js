import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
console.clear();
const HomeScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation()
  useEffect(() => {
    const getLoginUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token.length < 1) {
        return navigation.navigate('Login')
      }
    }
    getLoginUser()
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
          <Text>Tareas</Text>
        </View>
        <TouchableOpacity style={styles.addContainer}>
          <Text style={styles.textAdd}>Agregar tareas</Text>
        </TouchableOpacity>
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
    gap:4
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
    color:'#fff'
  }
});
