import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigations/DrawerNavigator';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {
  const getFonts = () => {};
  let [fontsLoaded, setFontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if(fontsLoaded) {
    return(
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    )
  } else{
    return <AppLoading/>
  }
}