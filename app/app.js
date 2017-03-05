import React from "react";
import ReactDOM from "react-dom";
import { 
  Content as PhotonContent,
  Pane,
  PaneGroup,
  Table,
  Window
} from "react-photonkit";

import Header from "./header"
import Sidebar from "./sidebar"
import Content from './content';
import Player from './player';

require('../index.scss');

ReactDOM.render(
  <Window>
    <Header />
    <PhotonContent>
      <PaneGroup>
        <Sidebar />
        <Content />
        <Player />
      </PaneGroup>
    </PhotonContent>
  </Window>
,document.getElementById('main'));
