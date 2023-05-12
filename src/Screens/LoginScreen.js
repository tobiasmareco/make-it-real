import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { firebaseConfig } from "../../firebase";
import { initializeApp } from "firebase/app";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("tmareco123@gmail.com");
  const [password, setPassword] = useState("123456");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  const onPressLogin = async () => {
    if ([email.trim(), password.trim()].includes("")) {
      return alert("Complete los campos obligatorios.");
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      AsyncStorage.setItem('token', user.user.stsTokenManager.accessToken);
      navigation.navigate("Home", { email: user.user.email });
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };

  const onPressRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user.user);
      Alert.alert("Cuenta creada", `Se ha creado la cuenta ${user.user.email}`);
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container} behavior="padding">
      <Text style={styles.textTitle}>ProTaskManagment</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPressLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressRegister}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 15,
    color: "#0782f9",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0782f9",
    width: "100%",
    padding: 15,
    borderRadius: 8,
  },
  buttonOutline: {
    backgroundColor: "#fff",
    marginTop: 5,
    borderColor: "#0782f9",
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: "#0782f9",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
});
