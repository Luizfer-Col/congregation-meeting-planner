import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigation from './navigation/StackNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigation />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
