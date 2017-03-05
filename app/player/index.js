import React, { Component } from 'react';
import { Pane } from 'react-photonkit';

// import MediaControls from './MediaControls';
import Playlist from './Playlist';

class Player extends Component {
    render() {
        return (
            <Pane>
                <Playlist />
                {/*<MediaControls />*/}
            </Pane>
        );
    }
}

export default Player;