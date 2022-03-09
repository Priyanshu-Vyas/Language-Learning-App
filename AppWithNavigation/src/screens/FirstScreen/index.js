import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function FirstScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to the <Text style={styles.text1}>world{'\n'}of Language</Text>
      </Text>
      <Text style={styles.text2}>
        A Different language is a {'\n'}different Vision of life.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main")}>
        <Text style={styles.buttontext}>
          Get inside{' '}
          <FontAwesome5 name={'arrow-right'} size={20} color="#080a13" />
        </Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require('K:/Apps/ReactNative/Language-Learning-App/AppWithNavigation/img/1.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130f40',
  },
  text: {
    marginTop: '15%',
    fontSize: 30,
    color: '#fdfaf9',
    marginLeft: '5%',
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 30,
    color: '#d09780',
    marginLeft: '5%',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
    color: '#fdfaf9',
    margin: '5%',
  },
  button: {
    backgroundColor: '#FDFAF9',
    width: '40%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: '3%',
    marginLeft: '5%',
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#130f40',
    margin: '5%',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    marginTop: '7%',
    borderRadius: 20,
  },
});
