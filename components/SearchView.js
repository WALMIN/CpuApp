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
    padding: 5,
    borderWidth: 2.5,
    borderColor: "#f2f2f2",
    borderRadius: 5
  }
});

export default SearchView;
