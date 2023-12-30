import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProgramListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Programas</Text>
    </View>
  );
};

export default ProgramListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
