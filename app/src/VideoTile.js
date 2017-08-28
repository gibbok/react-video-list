import React, { Component } from 'react';

class VideoTile extends Component {
    constructor(props) {
        super(props);
        this.onClickVideoTile = this.onClickVideoTile.bind(this);
    }
    onClickVideoTile() {
        console.log('onClickVideoTile', this.props.id);
    }
    render() {
        return (
            <div onClick={this.onClickVideoTile}>
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