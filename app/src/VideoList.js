import React, { Component } from 'react';
import VideoTile from './VideoTile.js'

class VideoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        let listVideoTiles =
            Object.entries(data).map((item, index) =>
                <VideoTile key={index} title={item[1].title} views={item[1].views} />
            );
        return (
            <div>{listVideoTiles}</div>
        );
    }
};

export default VideoList;