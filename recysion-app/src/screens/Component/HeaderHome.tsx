import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type MainScreenProps = {};

const HeaderHome: React.FC<MainScreenProps> = () => {
  const navigation = useNavigation();
  
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.headerText}>THEERA</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chatbubble-outline" size={windowWidth * 0.06} color="white" onPress={() => navigation.navigate('Messenger')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="settings-outline" size={windowWidth * 0.06} color="white" onPress={() => navigation.navigate('Setting')}/>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically
    backgroundColor: '#176B87',
    paddingHorizontal: 15,
    marginTop: 0,
    paddingTop: 40,
    height: 100,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
  },
  rightContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: -14,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10, // Adjust spacing between logo and title
  },
  iconButton: {
    paddingHorizontal: 10,
  },
});

export default HeaderHome;