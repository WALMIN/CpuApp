import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

const LoadingView = () => {
  return(
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>Laddar in aktuella händelser...</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoadingView;
