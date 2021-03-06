import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Styles from '../styles';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {Actions} from 'react-native-router-flux';
import Song from '../components/song';

export default class Downloads extends Component {
  onSongPlay(index) {
    Actions.play({songIndex: index,islocal:true})
  }

  deleteSong(index) {
    this.props.deleteSong(index, this.props.songs[index]);
  }
  render() {
    return (
        <ScrollView containerStyle={[Styles.homeContainer, Styles.noPaddingHorizontal]}>
          {
            this.props.songs.map((song, index) => {
              return <Song
                      key={index}
                      onPress={this.onSongPlay.bind(this, index)}
                      songName={song.name}
                      artistName={song.artist_name}
                      songImage={song.cover_url}
                      deleteSong={this.deleteSong.bind(this, index)}
                      search={false}
                      />
            })
          }
        </ScrollView>
   );
  }
}
