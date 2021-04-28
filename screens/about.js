import React from 'react';
import {View, Text , Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function About({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')}/>
      <Button title='Go to Review Details' onPress={() => navigation.navigate('ReviewDetails')}/>
    </View>
  );
}