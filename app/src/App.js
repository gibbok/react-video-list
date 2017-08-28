import React, { Component } from 'react';
import VideoList from './VideoList.js';
import Video from './Video';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ui: {
        title: 'List of most viewed YouTube videos',
        titleVideoList: 'Top 10s',
      },
      data: []
    };
    this.activeVideo = this.activeVideo.bind(this);
  }
  activeVideo(id) {
    let data = [...this.state.data];
    // de activate current active video
    let currentActiveVideo = data.find(video => video.isActive);
    currentActiveVideo.isActive = false;
    // activate new video
    let index = data.findIndex(video => video.id === id);
    data[index].isActive = true;
    this.setState({ data });
  }
  componentDidMount() {
    fetch('./data.json').then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(data => {
        this.setState({ data: data.videos });
      });
    }).catch(error => {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
  }
  render() {
    let data = this.state.data;
    let activeVideo = data.find(video => video.isActive);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Video video={activeVideo} />
        <VideoList data={this.state.data} activeVideo={this.activeVideo} />
      </div>
    );
  }
}

export default App;
