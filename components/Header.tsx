import React from 'react';
import { View, Image, Animated } from 'react-native';

const Header = () => {

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
		<View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
			<Image
				style={{ width: 150, height: 50, position: 'absolute', top: 10, left: 10, resizeMode: 'contain' }}
				source={require('../assets/images/logo.png')}
			/>
			<Animated.Image
				style={{ width: 50, height: 50, position: 'absolute', top: 10, right: 10, resizeMode: 'contain', transform: [{ rotate: spin }] }}
				source={require('../assets/images/pngegg.png')}
			/>
		</View>
	);
}

export default Header;

