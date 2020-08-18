import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to my landing page!</Text>
      
        <Button
          title="LET'S START"
          onPress={() => this.onPress()}
          style={styles.button}
          color="gray"
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  h1: {
    color: '#008F68',
    fontSize: 25,
  },
});
