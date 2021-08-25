import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  WebView
} from 'react-native-webview';

import {Actions} from 'react-native-router-flux';

export default class WatchVideo extends React.Component {
  playlist(){
    Actions.playlist();
  }

  videos(){
    Actions.videos();
  }

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
       {
         <WebView
          source={{uri: "https://www.youtube.com/embed/"+this.props.video_url}}
          startInLoadingState={true}
          />
       }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
