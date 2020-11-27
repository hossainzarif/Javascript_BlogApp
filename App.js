import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./src/screens/HomeScreen"
import ListScreen from "./src/screens/ListScreen"
import Semesters from "./src/screens/Semesters"
import Courses from "./src/screens/Courses"
import Faculties from "./src/screens/Faculties"
import Profile from "./src/screens/Profile"
const stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName ="Home">

        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="List" component={ListScreen} />
        <stack.Screen name="Semesters" component={Semesters} />
        <stack.Screen name="Courses" component={Courses} />
        <stack.Screen name="Faculties" component={Faculties} />
        <stack.Screen name="Profile" component={Profile} />

      </stack.Navigator>
    </NavigationContainer>

  )
}

export default App