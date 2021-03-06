import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

const LoadingView = () => {
  return(
    <View style={styles.container}>
      <ActivityIndicator size="large" style={styles.loading} />
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
  },
  loading: {
    width: 128,
    height: 128
  }
});

export default LoadingView;
