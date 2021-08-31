import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import ListItem from "./components/ListItem";
import SearchView from "./components/SearchView";

export default function App() {
  const [search, setSearch] = useState("");

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
    <ScrollView removeClippedSubviews={false} style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
          <View>
            <SearchView input={search} onChange={setSearch} />
            <FlatList
              data={data.filter((item) => {
                if(search === ""){
                  return item

                }else if(item.name.toLowerCase().includes(search.toLowerCase()) || item.summary.toLowerCase().includes(search.toLowerCase())){
                  return item

                } else {
                  return null

                }

              })}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <ListItem name={item.name} summary={item.summary} url={"https://polisen.se" + item.url} />
              )}
            />
          </View>
        )}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '2vmin'
  }
});
