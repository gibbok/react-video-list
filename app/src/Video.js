import React, { Component } from 'react';

class Video extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let video = this.props.video;
        let videoContent = !video ? 'Loading video...' :
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allowFullScreen></iframe>
        return (
            <div>{videoContent}</div>
        );
    }

};

export default Video;