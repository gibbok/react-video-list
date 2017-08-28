import React, { Component } from 'react';
import VideoListHeader from './VideoListHeader.js';
import VideoTile from './VideoTile.js';
import Loader from './Loader.js';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        let listVideoTiles = data.length === 0 ? <Loader /> :
            data.map((video, index) =>
                <VideoTile
                    key={index}
                    id={video.id}
                    title={video.title}
                    views={video.views}
                    activeVideo={this.props.activeVideo}
                />
            );
        return (
            <div>
                <VideoListHeader title={this.props.title} />
                <div>{listVideoTiles}</div>
            </div>
        );
    }
};

export default VideoList;