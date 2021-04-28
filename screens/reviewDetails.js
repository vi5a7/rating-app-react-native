import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({route, navigation}) {

  const item = route.params
  const rating = item.rating

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{ item.title }</Text>
        <Text>{ item.body }</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})
