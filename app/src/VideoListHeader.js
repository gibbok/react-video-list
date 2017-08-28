import React, { Component } from 'react';
import './VideoListHeader.css';

class VideoListHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='videoList__header'>
                <h2>{this.props.title}</h2>
            </div>
        );
    }

};

export default VideoListHeader;
