import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import MapView from 'react-native-maps';

export default class Festivals extends React.Component {
   render() {
    return(
      <ScrollView style={{ flex: 1, backgroundColor: "black"}}>
      <Text style={styles.title}>
        {"Electric Daisy Carnival Las Vegas"}
      </Text>
      <Text style={styles.text}>
        {"North America's Tomorrowland, EDC Las Vegas is an immersive experience up there with the best in the world. Taking place in Sin City, both artists and audience are ready to party, and it shows. A stacked lineup, ridiculous light shows and pyrotechnics, a plethora of unannounced special guests and a massive glow in the dark site waiting to be explored are all standard issue at EDC's flagship festival. Put it on the bucket list already. "}
        {"\n"}
        {"When & where: 15-17 May 2020, Las Vegas, Nevada"}
      </Text>
      <MapView
         style={styles.map}
         initialRegion={{
           latitude: 36.272680,
           longitude: -115.0,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}
      />
      <Text style={styles.title}>
        {"\n"}
        {"Ultra Music Festival"}
      </Text>
      <Text style={styles.text}>
        {"The culmination of Miami Music Week which kicks off festival season with a bang, you could easily make a case for Ultra Music Festival being the most exciting festival in the country. Gathering 170,000 people in Bayfront Park the festival is an all out euphoric haze of sight and sound. "}
        {"\n"}
        {"When & where: 20-22 March 2020, Miami, Florida"}
      </Text>
      <MapView
         style={styles.map}
         initialRegion={{
           latitude: 25.787911,
           longitude: -80.184890,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}
      />
      <Text style={styles.title}>
        {"\n"}
        {"Electric Zoo"}
      </Text>
      <Text style={styles.text}>
        {"Randall's Island, East Manhattan, parks a full-scale electronic festival right in the heart of New York City. Stadium EDM, proper techno and avant-garde house all stand side-by-side, somehow keeping Electric Zoo an intimate, almost personal affair."}
        {"\n"}
        {"When & where: TBA September 2020, New York, New York"}
      </Text>
      <MapView
         style={styles.map}
         initialRegion={{
           latitude: 40.797127,
           longitude: -73.922489,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}
      />
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#E0FFFF"
  } ,
  text: {
    fontFamily: "Cochin",
    textAlign: 'left',
    color: "white"
  },
  map: {
    width: 300,
    height: 200
  }
});
