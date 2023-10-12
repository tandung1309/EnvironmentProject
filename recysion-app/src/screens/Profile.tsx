import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Button, Center } from "native-base";
import HeaderHome  from './Component/HeaderHome';


const Profile = () => {
  const dispatch = useAppDispatch();

  return (
    <><HeaderHome />
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImage} />
        <Text style={styles.profileName}>Username</Text>
        <Text style={styles.profileUsername}>@username</Text>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.detailLabel}>Email:</Text>
        <Text style={styles.detailValue}>username@example.com</Text>
        <Text style={styles.detailLabel}>Location:</Text>
        <Text style={styles.detailValue}>user's location</Text>
      </View>
    </View>
    <Center style={{
      backgroundColor: 'white'
    }} flex={1}>
        <Button style={styles.button} onPress={() => dispatch(removeUser())}>Logout</Button>
      </Center></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: '#176B87',
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#04364A',
  },
  profileUsername: {
    fontSize: 16,
    color: '#04364A',
  },
  profileDetails: {
    backgroundColor: '#176B87',
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  detailLabel: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DAFFFB',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 14,
    color: '#DAFFFB',
  },
  button: {
    backgroundColor: '#176B87',
    marginTop: -300,
    color: 'red'
  }
});

export default Profile;