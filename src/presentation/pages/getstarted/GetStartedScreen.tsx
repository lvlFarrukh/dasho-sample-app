import { Dimensions, ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getSize } from '../../Utiles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GetStartedScreen = ({ navigation }: any) => {

  return (
    <ImageBackground source={require('../../assets/background1.png')} style={styles.background}>
      <TouchableOpacity style={styles.button} activeOpacity={.6} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default GetStartedScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 8,
    height: 40,
    borderColor: 'white',
    backgroundColor: 'white',
    width: getSize(windowWidth, 20),
    borderWidth: 1,
    borderRadius: 50,
  },
  buttonText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 15,
  },
})