import { StyleSheet } from 'react-native';
import Video from '../components/BackroundVideo'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Header from '../components/Header';


export default function TabTwoScreen() {
  return (
  <View>
      {/* <View style={styles.container}>
        <Text style={styles.title}>Rockets</Text>
      </View>
      <View style={styles.items}>
        <View style={styles.item}>
          <Text style={styles.titleSub}>Falcon 9</Text>
          <Text style={styles.titleSub}>42164.679</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.titleSub}>Falcon 9</Text>
          <Text style={styles.titleSub}>42164.679</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.titleSub}>Falcon 9</Text>
          <Text style={styles.titleSub}>42164.679</Text>
        </View>
    </View> */}
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(18,18,18, 1)',
  },
  items: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(18,18,18, 1)',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: 'rgba(18,18,18, 1)',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleSub: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
