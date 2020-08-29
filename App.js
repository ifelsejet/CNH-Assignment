import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.h1}>Welcome to my landing page!</Text>
    
      <Button
        title="LET'S START"
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
        color="gray"
      />
    <StatusBar style="auto" />
  </View>
  )
}

function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.h1}>Welcome to my new page!</Text>
    <Button
        title="GO BACK HOME"
        onPress={() => navigation.goBack()}
        style={styles.button}
        color="gray"
      />
    </View>
  );
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
