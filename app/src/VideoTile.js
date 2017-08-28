import React, { Component } from 'react';

class VideoTile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    {'Title:'}
                </div>
                <div>
                    {this.props.title}
                </div>
            </div>
        );
    }
};

export default VideoTile;