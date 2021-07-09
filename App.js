import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sample2 from './sample2';

const Stack = createStackNavigator()

const Sample = ({navigation}) => {
  return (
    <TouchableOpacity style={{ backgroundColor: "white", height: "60%" }}
    onPress={() => navigation.navigate("Sample2")}>
      <Video
        style={{width: "100%", height: "100%"}}
        source={{
          uri: "http://dpw2yg2k9wc9e.cloudfront.net/06825e2e-4d16-4e1c-af30-9a926f03ff46_productId_96_1.webm"
        }}
        resizeMode="cover"
        />
      </TouchableOpacity>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Sample" component={Sample} options={{ headerShown: false }} />
        <Stack.Screen name="Sample2" component={Sample2} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;

