import React from 'react';
import { useCallback } from "react";
import { StyleSheet, Text, View, Linking, Platform } from 'react-native';
import LinkButton from "./LinkButton";

const ListItem = (props) => {
  const handleLinkClick = useCallback(async () => {
    const supported = await Linking.canOpenURL(props.url);

    if (supported) {
      if(Platform.OS == 'web') {
        window.open(props.url, '_blank');

      } else {
        await Linking.openURL(props.url);

      }

    } else {
      Alert.alert(`Error opening this URL: ${props.url}`);

    }

  }, [props.url]);

  return (
    <View style={styles.item}>
      <View style={{textAlign: "left"}}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.text}>{props.summary}</Text>
      </View>
      <LinkButton onClick={handleLinkClick} />
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
