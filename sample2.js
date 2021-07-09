import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const Sample2 = () => {
  return (
    <View>
      <Video
        style={{width: "100%", height: "100%"}}
        source={{
          uri: "http://dpw2yg2k9wc9e.cloudfront.net/06825e2e-4d16-4e1c-af30-9a926f03ff46_productId_96_1.webm"
        }}
        resizeMode="cover"
        />
    </View>
  )
}

export default Sample2;

