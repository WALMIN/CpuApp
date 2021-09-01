import React from 'react';
import { useContext, useCallback } from "react";
import { StyleSheet, Linking, Platform, ImageBackground, View, Text, Pressable } from 'react-native';
import image from "../assets/police.jpg";
import TopItemContext, { TopItemProvider } from "../contexts/TopItemContext";

const TopItem = () => {
  const { topItemTitle, topItemText, topItemLink } = useContext(TopItemContext);

  const handleLinkClick = (url) => useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      if(Platform.OS == "web") {
        window.open(url, "_blank");

      } else {
        await Linking.openURL(url);

      }

    } else {
      Alert.alert("Error opening this URL: ${url}");

    }

  }, [url]);

  return(
    <Pressable onPress={handleLinkClick(topItemLink)}>
      <ImageBackground source={image} resizeMode="cover" imageStyle={{ borderRadius: 5}}>
        <View style={styles.item}>
          <Text style={styles.title}>{topItemTitle}</Text>
          <Text style={styles.text}>{topItemText}</Text>
          <Text style={styles.credit}>Foto: <Pressable style={styles.creditLink} onPress={handleLinkClick("https://fotoakuten.se")}>fotoakuten.se</Pressable></Text>
        </View>
      </ImageBackground>
    </Pressable>
  );

}

const styles = StyleSheet.create({
  item: {
    padding: 28,
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#ffffff",
    padding: 0,
    margin: 0
  },
  text: {
    fontSize: 28,
    fontWeight: 'normal',
    color: "#ffffff",
    padding: 0,
    margin: 0
  },
  credit: {
    color: "#ffffff",
    padding: 0,
    margin: 0,
    marginTop: 20
  },
  creditLink: {
    color: "#0080ff"
  }
});

export default TopItem;
