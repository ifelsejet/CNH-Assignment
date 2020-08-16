import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my landing page!</Text>
      <Button
        title="Press me!"
        color = "#0E0E52"
       

       
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78C0E0',
    alignItems: 'center',
    paddingBottom: "10%",
    justifyContent: 'center',
    
  },
});
