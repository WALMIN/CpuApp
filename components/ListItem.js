import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem = (props) => {
  return (
    <View style={styles.item}>
      <View style={{textAlign: "left"}}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.text}>{props.summary}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: '1vmin',
    marginTop: "0.5vmin",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    borderRadius: "0.5vmin"
  },
  title: {
    fontWeight: 'bold',
    padding: 0,
    margin: 0
  },
  text: {
    fontWeight: 'normal',
    padding: 0,
    margin: 0
  }
});

export default ListItem;
