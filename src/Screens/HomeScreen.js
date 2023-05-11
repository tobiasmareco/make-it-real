import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const HomeScreen = () => {
  const { params } = useRoute();
  useEffect(() => {}, [console.log("entre en home")]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Welcome:</Text>
        <Text style={styles.emailText}>{params.email}</Text>
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
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  emailText: {
    fontWeight: "bold",
    color: "#0782f9",
  },
});
