
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header';

const Stack = createStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#666'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}  
      >
        <Stack.Screen
          name="Home" 
          component={Home}
          options={{
            headerTitle: () => <Header title='GameZone' navigation={navigation}/>
          }}
        />
        <Stack.Screen
          name="ReviewDetails" 
          component={ReviewDetails}
          options={{
            title: 'Review Details'
          }}
        />

      </Stack.Navigator>
  );
}

const AboutStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#666'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}  
      >
        <Stack.Screen
          name="About" 
          component={About}
          options={{
            headerTitle: () => <Header title='About' navigation={navigation}/>
          }}
        />
      </Stack.Navigator>
  );
}


export {MainStackNavigator, AboutStackNavigator};