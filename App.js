import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

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
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>{item.summary}</Text>
              </View>
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
  },
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
