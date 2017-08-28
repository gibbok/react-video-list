import React, { Component } from 'react';
import './VideoTile.css';

/*
 * Video tile information.
 */
class VideoTile extends Component {
    constructor(props) {
        super(props);
        this.onClickVideoTile = this.onClickVideoTile.bind(this);
    }
    onClickVideoTile() {
        // lift state up here, by calling `activeVideo`
        // passed in `props` by a parent component
        this.props.activeVideo(this.props.id);
    }
    render() {
        return (
            <div className='videoTile' onClick={this.onClickVideoTile}>
                <div className='videoTile__title'>
                    <div className='videoTile__title__text'>
                        {'Title:'}
                    </div>
                    <div className='videoTile__title__value'>
                        {this.props.title}
                    </div>
                </div>
                <div className='videoTile__views'>
                    <div className='videoTile__views__text'>
                        {'Views:'}
                    </div>
                    <div className='videoTile__views__value'>
                        {this.props.views.toLocaleString()}
                    </div>
                </div>
            </div>
        );
    }
};

export default VideoTile;
