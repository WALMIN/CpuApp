import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const SearchView = (props) => {
  return(
    <TextInput
      style={styles.input}
      onChangeText={props.onChange}
      value={props.input}
      placeholder="Sök..." />
  );

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: '1vmin',
    borderWidth: "0.25vmin",
    borderColor: "#f2f2f2",
    borderRadius: "0.5vmin"
  }
});

export default SearchView;
