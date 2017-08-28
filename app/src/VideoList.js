import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import Loader from './Loader.js';

/*
 * List of top 10s videos.
 */
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
                <div>{listVideoTiles}</div>
            </div>
        );
    }
};

export default VideoList;
