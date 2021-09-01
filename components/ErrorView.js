import React from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import logo from "../assets/error.png";

const ErrorView = () => {
  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Ett problem uppstod, testa igen!</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 128,
    height: 128
  }
});

export default ErrorView;
