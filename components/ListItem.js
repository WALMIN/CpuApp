import React from 'react';
import { useCallback } from "react";
import { StyleSheet, Text, View, Linking, Platform } from 'react-native';
import LinkButton from "./LinkButton";

const ListItem = (props) => {
  const handleLinkClick = useCallback(async () => {
    const supported = await Linking.canOpenURL(props.url);

    if (supported) {
      if(Platform.OS == "web") {
        window.open(props.url, "_blank");

      } else {
        await Linking.openURL(props.url);

      }

    } else {
      Alert.alert("Error opening this URL: ${props.url}");

    }

  }, [props.url]);

  return (
    <View style={styles.item}>
      <View style={styles.innerItem}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.text}>{props.summary}</Text>
      </View>
      <LinkButton onClick={handleLinkClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginTop: 3,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 5
  },
  innerItem: {
    flex: 1,
    marginRight: 3,
    textAlign: "left"
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 0,
    margin: 0
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    padding: 0,
    margin: 0
  }
});

export default ListItem;
