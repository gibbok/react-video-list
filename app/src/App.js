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
        titleVideoList: 'Top 10s'
      },
      data: [
        {
          id: 'kJQP7kiw5Fk',
          title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
          views: 3446728587,
          isActive: true
        },
        {
          id: 'RgKAFK5djSk',
          title: 'Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack',
          views: 3065485805,
          isActive: false
        },
        {
          id: '9bZkp7q19f0',
          title: 'PSY - GANGNAM STYLE(강남스타일) M/V',
          views: 2941023973,
          isActive: false
        }
      ]
    };
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
        <VideoList data={this.state.data} />
      </div>
    );
  }
}

export default App;
