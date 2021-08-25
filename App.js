import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';

import Routes from './Route';
import Playlist from './views/Playlist';
import WatchVideo from './views/WatchVideo';
import Festivals from './views/Festivals';

function playlist() {
  Actions.playlist();
}

function festivals() {
  Actions.festivals();
}

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black"}}>
      <Text style={styles.title}>
        {"EDM Lover"}
        {"\n"}
      </Text>
      <Text style={styles.text}>
        {"Your personal EDM fun page for amazing festivals and live videos"}
        {"\n"}
      </Text>
      <Image
        style={styles.logo}
        source={{
          uri: "https://weraveyou.com/wp-content/uploads/2019/10/ultra-miami.jpg"
        }}
      />
      <Button
          title="Festivals"
          color="#f194ff"
          onPress={() => festivals()}
      />
      <Button
          title="Live Sets"
          color="#f194ff"
          onPress={() => playlist()}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default class App extends React.Component {
  render() {
    return (
       <Router>
              <Stack key="root">
                <Scene key="home" component={Home} title="Home" />
                <Scene key="festivals" component={Festivals} title="Upcoming Festivals" />
                <Scene key="playlist" component={Playlist} title="Live Sets" />
                <Scene key="watchvideo" component={WatchVideo} title="View Video"/>
               </Stack>
       </Router>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  logo: {
    width: 300,
    height: 200
  },
  title : {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#E0FFFF"
  },
  text: {
    fontFamily: "Cochin",
    textAlign: 'center',
    color: "#ff7f50",
    fontSize: 14
  }
});
