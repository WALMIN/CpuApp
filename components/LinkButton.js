import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

const LinkButton = (props) => {
  return(
    <Pressable style={styles.button} onPress={props.onClick}>
      <Text>👮</Text>
    </Pressable>
  );

}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 4
  }
});

export default LinkButton;
