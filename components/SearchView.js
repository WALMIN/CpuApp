import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const SearchView = (props) => {
  return(
    <TextInput
      style={styles.input}
      onChangeText={props.onChange}
      value={props.input}
      placeholder="Sök efter händelse..." />
  );

}

const styles = StyleSheet.create({
  input: {
    height: 48,
    padding: 8,
    borderWidth: 2.5,
    borderColor: "#f2f2f2",
    borderRadius: 5,
    marginTop: 3,
    fontSize: 16
  }
});

export default SearchView;
