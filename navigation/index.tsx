import { FontAwesome,  SimpleLineIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Animated, Image, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  

  let rotateValue = new Animated.Value(0)

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  Animated.timing(rotateValue, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: false
  }).start(() => { spin })

  return (
    <NavigationContainer 
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
      <Image
        style={{ width: 150, height: 50, position: 'absolute', top: 20, left: 10, resizeMode: 'contain' }}
          source={require('../assets/images/logo.png')}
        />
      <Animated.Image
        style={{ width: 50, height: 50, position: 'absolute', top: 20, right: 10, resizeMode: 'contain', transform: [{ rotate: spin }] }}
          source={require('../assets/images/pngegg.png')}
        />
    </NavigationContainer>
  );
}

const HomeStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          tabBarIcon: ({ color }) => <SimpleLineIcons name="home" size={24} color={color} />,
          
        })}
      />
      <BottomTab.Screen
        name="Launches"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="planet-outline" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Rockets"
        component={TabThreeScreen}
        options={{
          title: 'Rockets',
          tabBarIcon: ({ color }) => <SimpleLineIcons name="rocket" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
