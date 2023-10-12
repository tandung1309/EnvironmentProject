import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SimpleHeader from './Component/SimpleHeader';

const Setting = () => {
  return (
    <><SimpleHeader title='Setting' /><View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Notice Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Language</Text>
      </TouchableOpacity>
    </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#176B87',
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 18,
    color: '#04364A',
  },
});

export default Setting;
