import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const MAX_RESULT = 15;
const PLAYLIST_ID = "PL9wS1ZNFGvboeH5kxDYl7LYv4h11Gzzob"
const API_KEY = "AIzaSyDAXIm5CamCFcKkNvW0CSFm4Ik4ZQVZ02A";

export default class PlayList extends React.Component {
  playlist(){
    Actions.playlist();
  }

  watchVideo(video_url){
    Actions.watchvideo({video_url: video_url})
  }

  constructor(props){
    super(props);
    this.state = {
      videos: [],
    }
  }

  componentWillMount(){
    this.getPlaylistData();
  }

  getPlaylistData = async() => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`);
    const json = await response.json();
    this.setState({videos: json['items']})
    console.log(this.state.videos);
  };

  render() {
    const videos = this.state.videos;

    return(
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={this.state.videos}
          renderItem={
            ({item}) =>
              <TouchableOpacity
                style={styles.videoItem}
                onPress={() => this.watchVideo(item.contentDetails.videoId)}
              >
              <Text
                style={styles.textItem}
              >
              {item.snippet.title}
              </Text>
              </TouchableOpacity>
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  },
  videoItem: {
    borderBottomColor: 'red',
    borderBottomWidth: 4,
    borderRadius: 20
  },
  textItem: {
    padding: 12,
    fontSize: 15,
    height: 40
  },
});
