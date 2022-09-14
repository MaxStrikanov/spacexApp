import React, {useRef} from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';



const VideoBG  = () => {
	const video = useRef(null);
	return (
		<View style={styles.container}>
			<Video
				repeat
				ref={video}
				style={StyleSheet.absoluteFill}
				source={require('../assets/video/world.mp4')}
				resizeMode="cover"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	
});

export default VideoBG;