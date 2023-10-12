import { Pressable, StyleSheet, Text, View, TextInput, TouchableOpacity, Image  } from "react-native";
import React, { useState } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { Button } from "native-base";


type Props = {} & NativeStackScreenProps<AuthStackParams, "SignUp">;

function SignUp({ navigation, route }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, confirmPassword] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../img/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'white'}
          value={username}
          onChangeText={setUsername} />
          
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'white'}
          secureTextEntry
          value={password}
          onChangeText={setPassword} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={'white'}
          secureTextEntry
          value={confirm}
          onChangeText={confirmPassword} />

        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Login"); } }>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  // return (
  //   <View>
  //     <Text>Sign Up</Text>
  //     <Button
  //       onPress={() => {
  //         navigation.navigate("Login");
  //       }}
  //     >
  //       Login
  //     </Button>
  //   </View>
  // );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain'
  },
  formContainer: {
    backgroundColor: '#176B87',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    backgroundColor: '#04364A',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#04364A',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SignUp;