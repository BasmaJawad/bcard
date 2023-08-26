/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container2}>
      <Text style={{color: 'white'}}></Text>
      <Button title='Hello'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

//import React from 'react';
//import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}> 
        <Image
          style={styles.companyImage}
          source={{
            uri: 'https://bibliotek.kea.dk/images/KEAprodukter/KEA_logo_EN_Web_red.png',
          }} 
          resizeMode="contain"
        />
        <Text style={styles.name}>Basma Jawad</Text>
        <Text style={styles.title}>Head Of It</Text>
        <Text style={styles.contactInfo}>Email: basm0035@kea.dk</Text>
        <Text style={styles.contactInfo}>Phone: +45 42616225</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233249',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#f3f3f3',
    padding: 20,
    paddingBottom: 60,
    paddingTop: 0,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  companyImage: {
    width: 130,
    height: 130,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10

  },
  contactInfo: {
    fontSize: 16,
    marginTop: 10,
  },
});


