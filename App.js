import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import ListItem from "./components/ListItem";
import SearchView from "./components/SearchView";
import TopItem from "./components/TopItem";
import LoadingView from "./components/LoadingView";
import ErrorView from "./components/ErrorView";
import TopItemContext, { TopItemProvider } from "./contexts/TopItemContext";

export default function App() {
  useEffect(() => { document.title = "Polisens aktuella händelser" }, []);

  const [search, setSearch] = useState("");

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [topItemTitle, setTopItemTitle] = useState("");
  const [topItemText, setTopItemText] = useState("");
  const [topItemLink, setTopItemLink] = useState("");

  function setTopItem(title, text, link){
    setTopItemTitle(title);
    setTopItemText(text);
    setTopItemLink(link);

  }

  const getData = async () => {
     try {
      const response = await fetch('https://polisen.se/api/events?locationname=Uppsala;Härnösand');
      const json = await response.json();
      setTopItem(json[0].name, json[0].summary, "https://polisen.se" + json[0].url);
      setData(json);

    } catch (error) {
      console.error(error);

    } finally {
      setLoading(false);

    }

  };

  useEffect(() => { getData(); }, []);

  return (
    <TopItemProvider value={{ topItemTitle, topItemText, topItemLink, setTopItem }}>
      <ScrollView removeClippedSubviews={false} style={styles.container}>
          {
            isLoading ? <LoadingView /> :
            (
              <View>
              {
                (data.length > 0) ?
                  <View>
                    <TopItem />
                    <SearchView input={search} onChange={setSearch} />
                    <FlatList
                      data={data.filter((item) => {
                        if(item.name.toLowerCase().includes(topItemTitle.toLowerCase())){
                          return null

                        }

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
                  :
                  <ErrorView />
              }
              </View>
            )
          }
        <StatusBar style="auto" />
      </ScrollView>
    </TopItemProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2vmin'
  }
});
