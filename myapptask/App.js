import React from "react"
import { Text, TouchableOpacity } from "react-native"
import HomeScreen from "./screens/HomeScreen"
import TaskScreen from "./screens/TaskFormScreen"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Task App",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#ffffff" },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("TaskScreen")}
              >
                <Text
                  style={{ color: "#ffffff", marginRight: 20, fontSize: 15 }}
                >
                  New
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TaskScreen"
          component={TaskScreen}
          options={{
            title: "New Task",
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
