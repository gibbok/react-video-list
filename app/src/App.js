import React, { Component } from 'react';
import Header from './Header.js';
import VideoList from './VideoList.js';
import Video from './Video';
import './App.css';

/* 
 * Main component.
 * Notes:
 * The main state is kept here and passed down to other components using props.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ui: {
        header: 'List of most viewed YouTube videos',
        headerVideoList: 'Top 10s',
      },
      data: []
    };
    this.activeVideo = this.activeVideo.bind(this);
  }
  activeVideo(id) {
    // activate a video
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
    // fetch data and populate components
    fetch('./data.json').then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ', response.status);
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
    // find out active video
    let data = this.state.data;
    let activeVideo = data.find(video => video.isActive);
    return (
      <div className='app'>
        <div className='app__video'>
          <Header title={this.state.ui.header} />
          <Video
            video={activeVideo}
          />
        </div>
        <div className='app__videoList'>
          <VideoList
            data={this.state.data}
            title={this.state.ui.headerVideoList}
            activeVideo={this.activeVideo}
          />
        </div >
      </div >
    );
  }
}

export default App;
