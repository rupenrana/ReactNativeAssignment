/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Counter from './src/Counter';
import AssignmentListMenu from './src/AssignmentListMenu';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GreetingCard from './src/GreetingCard';
import ToggleText from './src/ToggleText';
import Timer from './src/Timer';
import InputHandler from './src/InputHandler';
import ToDoList from './src/ToDoList';
import ParentChildMemoization from './src/ParentChildMemoization';
import CustomHook from './src/CustomHook';
import DarkMode from './src/DarkMode';
import ResponsiveCardGrid from './src/ResponsiveCardGrid';


const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AssignmentListMenu">
          <Stack.Screen name="AssignmentListMenu" component={AssignmentListMenu} />
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="GreetingCard" component={GreetingCard} />
          <Stack.Screen name="ToggleText" component={ToggleText} />
          <Stack.Screen name="Timer" component={Timer} />
          <Stack.Screen name="InputHandler" component={InputHandler} />
          <Stack.Screen name="ToDoList" component={ToDoList} />
          <Stack.Screen name="ParentChildMemoization" component={ParentChildMemoization} />
          <Stack.Screen name="CustomHook" component={CustomHook} />
          <Stack.Screen name="DarkMode" component={DarkMode} />
          <Stack.Screen name="ResponsiveCardGrid" component={ResponsiveCardGrid} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    backgroundColor: "#FFF011",
    flex: 1
  },
  container3: {
    backgroundColor:"rgb(69, 255, 17)",
    flex: 2,
  },
  container4: {
    backgroundColor:"rgb(43, 0, 255)",
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#7a7a58",
  },
  nextButton : {
    position: 'absolute',
    top: 5,
    alignSelf: 'center',
    alignItems: 'center',
  },
  linkText: {
  color: 'blue',
  fontSize: 20,
  textDecorationLine: 'underline',
}
});

export default App;
