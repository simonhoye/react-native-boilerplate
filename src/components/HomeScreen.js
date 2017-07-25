import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppConfig from '../../appConfig';

const apiEndpointURL = AppConfig.apiEndpointURL;
const apiKey = AppConfig.apiKey;


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>React Native Boilerplate</Text>
            <Text>{apiEndpointURL}</Text>
            <Text>{apiKey}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default HomeScreen;
