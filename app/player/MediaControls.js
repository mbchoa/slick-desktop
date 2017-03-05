import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-photonkit';

class MediaControls extends Component {
    render() {
        return (
            <ButtonGroup>
                <Button glyph="to-start" />
                <Button glyph="play" />
                <Button glyph="to-end" />
            </ButtonGroup>            
        );
    }
}

export default MediaControls;