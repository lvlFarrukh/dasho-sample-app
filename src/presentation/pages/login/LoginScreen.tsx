import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { getSize } from '../../Utiles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({ navigation }: any) => {

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={styles.heading}>Login</Text>
      
      <TextInput
        style={styles.textfield}
      />
      
      <TextInput
        style={styles.textfield}
        secureTextEntry={true}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  textfield: {
    margin: 10,
    width: getSize(windowWidth, 20),
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 30
  },

  button: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 8,
    height: 40,
    borderColor: 'gray',
    width: getSize(windowWidth, 20),
    borderWidth: 1,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
  },
  heading: {
    fontSize: 20,
    color: 'black',
    margin: 20
  }
})