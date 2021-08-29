import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import ListItem from "./components/ListItem";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
     try {
      const response = await fetch('https://polisen.se/api/events?locationname=Uppsala;Härnösand');
      const json = await response.json();
      setData(json);

    } catch (error) {
      console.error(error);

    } finally {
      setLoading(false);

    }

  };

  useEffect(() => { getData(); }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <View>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <ListItem name={item.name} summary={item.summary} url={"https://polisen.se" + item.url} />
            )}
          />
        </View>
        )}
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2vmin'
  }
});
