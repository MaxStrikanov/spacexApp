import { ScrollView, StyleSheet, Image } from 'react-native';
import Launches from '../components/GetData'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Header from '../components/Header';



export default function TabTwoScreen() {
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.title}>Launches</Text>
      <ScrollView >
        <View style={styles.imagesWrapper}>
          <Image 
            source={{ uri:'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png' }}
              style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }} 
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png' }}
              style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/3d/86/cnu0pan8_o.png' }}
              style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png' }}
              style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/d9/3e/FfrN88ry_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/54/7a/c5XLHIvL_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/a6/e8/5PyY296y_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/d3/08/7YmXiSOQ_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/54/f8/0X2hNhNK_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/5b/10/dfj7yRG3_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/82/d6/SCoNa79H_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/e8/33/RV791zv9_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/1b/40/Ouyy9Neh_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/cd/99/lNWjUnUS_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/ab/6f/3l4ib2QW_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/4e/c6/M7X1WGKk_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/f9/3a/3kH19hlj_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/1c/e0/lhGbeqkh_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/e3/b5/UEzC560l_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/02/51/7NLaBm8c_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/ea/12/8vVzlOeL_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/cb/4b/n6GTX4PI_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
          <Image
            source={{ uri: 'https://images2.imgbox.com/e8/30/yMNPvCci_o.png' }}
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
          />
        </View>
      </ScrollView>
    
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
  imagesWrapper: {
    flex: 1, 
    backgroundColor: 'rgba(18,18,18, 1)',
    width: '100%', 
    flexDirection: 'row', 
    flexWrap: 'wrap'
  }
});
