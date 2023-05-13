import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import AddTask from "./src/Screens/AddTask";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Add"
          component={AddTask}
          options={{
            presentation:'modal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

