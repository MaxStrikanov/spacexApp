import { useState } from 'react';
import { StyleSheet, Image, Animated } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {

  let rotateValue = useState(new Animated.Value(0))[0]

  const spin = rotateValue.interpolate({
    inputRange: [500, 600],
    outputRange: ['500px', '-600px']
  })

  Animated.timing(rotateValue, {
    toValue: -1000,
    duration: 5000,
    useNativeDriver: true
  }).start()


  return (
    
    <View style={styles.container}>
      <Animated.Image
        source={ require('../assets/images/rocket.png')}
        style={{ width: '100%', height: '100%', resizeMode: 'contain', margin: 10, transform: [{ translateY: rotateValue }] }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(18,18,18, 1)',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
