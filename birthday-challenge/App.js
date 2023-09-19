import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {' '}
      <View style={styles.main}>
        <View style={styles.yellowContainer}>
          <Text style={styles.paragraph}>Happy Birthday to</Text>
        </View>

        <View style={styles.pinkContainer}>
          {' '}
          <Text style={styles.producer}>
            {' '}
            Our<br></br> awesome <br></br> producer!{' '}
          </Text>
        </View>
        <View style={styles.cakeContainer}>
          {' '}
          <Image
            style={styles.img}
            source={require('./assets/birthday-cake.png')}
          />
        </View>
      </View>
      <View></View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FDEEE7',
    padding: 8,
  },
  main: { display: 'flex', flexDirection: 'row' },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset:'black',
    
  },
  yellowContainer: {
    backgroundColor: '#FFEECC',
    width: 150,
    height: 300,
    justifyContent: 'center',
    marginLeft: 20,
    borderRadius: 22,
    borderColor: 'black',
    borderWidth: 1,
  },

  pinkContainer: {
    backgroundColor: '#FFCCCC',
    width: 120,
    height: 120,
    justifyContent: 'center',
    marginLeft: 20,
    alignItems: 'center',
    borderRadius: 22,
    borderColor: 'black',
    borderWidth: 1,
  },
  cakeContainer: {
    backgroundColor: '#FEBBCC',
    marginTop: 150,
    marginLeft: -120,
    width: 120,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    borderColor: 'black',
    borderWidth: 1,
  },
  img: { width: 70, height: 70 },
  producer:{fontSize:18, fontWeight:'semi-bold'}
});
