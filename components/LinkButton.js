import React from 'react';
import { useCallback } from "react";
import { StyleSheet, Button, Linking, Platform } from 'react-native';

const LinkButton = ({ url }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      if(Platform.OS == 'web') {
        window.open(url, '_blank');

      } else {
        await Linking.openURL(url);

      }

    } else {
      Alert.alert(`Error opening this URL: ${url}`);

    }

  }, [url]);

  return <Button title="🔗" style={{borderRadius: "0.5vmin"}} color="#e5e5e5" onPress={handlePress} />;

};

export default LinkButton;
