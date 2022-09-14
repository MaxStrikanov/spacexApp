
import  React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import { Rockets } from '../interfaces';
import axios, { AxiosResponse } from  'axios';


const Launches = () => {
	const [isLoading, setLoading] = useState(true);
	const [spacexData, setRocketsData] = useState<Rockets[]>([]);
	console.log( spacexData )

	useEffect(() => {
		axios
			.get<Rockets[]>('https://api.spacexdata.com/v3/launches/past')
			.then((response: AxiosResponse) => {
				setRocketsData(response.data)
			})
	}, []);

	return (
		<View style={{ flex: 1, padding: 24 }}>
			<FlatList
				data={ spacexData }
				keyExtractor={ item  => item.rocket_id}
				renderItem={({ item }) => (
				<Text>{item.rocket_name}, {item.rocket_type}</Text>
				)}
			/>
			
		</View>
	);
};

export default Launches;