import React from "react";
import { Pane, NavGroup, NavTitle, NavGroupItem } from "react-photonkit";
import autoBind from 'auto-bind';

class Sidebar extends React.Component {
  static defaultProps = {
    channels: [
      'classical',
      'jazz',
      'hip hop',
    ],
    friends: [
      'bjdelro',
      'jmao115',
      'jdavis18',
      'poppycornshin',
      'richard',
      'dflores',
    ],
  };
  
  constructor(props) {
    super(props);
    autoBind(this);
  }

  changeChannel(index) {
    console.log(`sidebar clicked with ${index}`)
  }

  openFriendChatWindow(index) {

  }

  renderChannels() {
    const { channels } = this.props;
    return channels.map((channel, key) =>
      <NavGroupItem
        eventKey={ key+1 }
        key={ key }
        text={ channel }
      />
    );
  }
  
  renderFriendsList() {
    const { friends } = this.props;
    return friends.map((friend, key) =>
      <NavGroupItem
        eventKey={ key+1 }
        key={ key }
        text={ friend }
      />
    );
  }

  render() {
    const { 
      channels,
      friends
    } = this.props;

    return (
      <Pane ptSize="sm" sidebar>
        <NavTitle>CHANNELS ({`${ channels.length }`})</NavTitle>
        <NavGroup activeKey={0} onSelect={this.changeChannel}>
          { this.renderChannels() }
        </NavGroup>
        <NavTitle>FRIENDS ({`${ friends.length }`})</NavTitle>
        <NavGroup activeKey={0} onSelect={this.openFriendChatWindow}>
          { this.renderFriendsList() }
        </NavGroup>
      </Pane>
    );
  }
}

export default Sidebar;
