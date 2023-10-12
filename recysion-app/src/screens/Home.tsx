import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView , Dimensions } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/types"; // Import the type
import HeaderHome  from './Component/HeaderHome';
import Icon from 'react-native-vector-icons/Ionicons';


type MainScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const Home: React.FC<MainScreenProps> = ({ navigation }) => {

  const diyImages = [
    require('../../img/diy/1.png'),
    require('../../img/diy/2.png'),
    require('../../img/diy/3.png'),
    require('../../img/diy/4.png'),

  ];

  const suggestedImages = [
    require('../../img/recommendations/1.png'),
    require('../../img/recommendations/2.png'),
    require('../../img/recommendations/3.png'),
    require('../../img/recommendations/4.png'),
  ];

  const headerImageWidth = '100%';
  const headerImageHeight = (480 / 1920) * Dimensions.get('window').width;

  return (
      <><HeaderHome />
    <View style={styles.container}>
      <View style={{
        width: '100%',
        marginTop: -30,
        marginBottom: 10,
      }}>
        <Image
            source={require('../../img/header.png')}
            style={{
              width: headerImageWidth,
            }}
            resizeMode="contain"
          />
      </View>
      <View style={styles.iconBoxContainer}>
        <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#64CCC5' }]} onPress={() => navigation.navigate('Find')}>
          <Icon name="search-outline" size={24} color="white" />
          <Text style={styles.iconText}>Find</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#176B87' }]} onPress={() => navigation.navigate('DIY')}>
          <Icon name="hammer-outline" size={24} color="white" />
          <Text style={styles.iconText}>DIY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#1F4172' }]} onPress={() => navigation.navigate('Items')}>
          <Icon name="cube-outline" size={24} color="white" />
          <Text style={styles.iconText}>Items</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#04364A' }]} onPress={() => navigation.navigate('Blogs')}>
          <Icon name="newspaper-outline" size={24} color="white" />
          <Text style={styles.iconText}>Blogs</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.imageList}>
        <Text style={styles.sectionTitle}>Recommendations</Text>
        <FlatList
          horizontal
          data={suggestedImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )} />
      </View>

      <View style={styles.imageList}>
        <Text style={styles.sectionTitle}>DIY Images</Text>
        <FlatList
          horizontal
          data={diyImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )} />
      </View>
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  iconBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconBox: {
    width: '23%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageList: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#04364A'
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
  headerImageContainer: {
    width: '100%',
    aspectRatio: 1920 / 480, // Aspect ratio of the original image
    marginBottom: 40,
  },
});

export default Home;

