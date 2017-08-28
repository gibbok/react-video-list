import React, { Component } from 'react';

class Video extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let video = this.props.video;
        let src = `https://www.youtube.com/embed/${video.id}`;
        return (
            <div>
                <iframe width="560" height="315" src={src} frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    }

};

export default Video;