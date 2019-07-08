import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'; //camelCase PlayList?
import Spotify from '../../util/Spotify.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
        name: '',
        artist: '',
        album: '',
        id: ''
        },
        {
        name: '',
        artist: '',
        album: '',
        id: ''
        } ],
      playlistName: 'Swan Lake meets Kanye West',
      playlistTracks: [
        {
        name: '',
        artist: '',
        album: '',
        id: ''
        },
        {
          name: '',
          artist: '',
          album: '',
          id: ''
        }
      ]
    }; //end of this.state

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

} //end of constructor

  Spotify.search() {
    console.log(term);
  }

  addTrack(track) {
    if(this.state.playlistTracks.find(savedTrack =>
    savedTrack.id !== track.id)) {
      return this.state.playlistTracks.push(track);
    }
  }

  removeTrack(track) {

  }

  updatePlaylistName(name) {
    this.setState({playlistName: name });
  }

  savePlaylist(playlistTracks) {
    let trackURIs = ['trackURI', 'trackURI', 'trackURI'];
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={Spotify.search} />
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  } //end of render()

} //end of App Component

export default App;
