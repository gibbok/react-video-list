import React, { Component } from 'react';
import VideoTile from './VideoTile.js'

class VideoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        let listVideoTiles = data.length === 0 ? 'Loading video list ...' :
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
            <div>{listVideoTiles}</div>
        );
    }
};

export default VideoList;