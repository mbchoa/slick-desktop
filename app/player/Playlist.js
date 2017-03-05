import React, { Component } from 'react';
import { ButtonGroup, Table } from 'react-photonkit';

class Playlist extends Component {
    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Length</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Forever Sensei</td>
                        <td>Daisaku Ikeda</td>
                        <td>3:48</td>
                    </tr>
                    <tr>
                        <td>Stayin' Alive</td>
                        <td>BeeGees</td>
                        <td>3:17</td>
                    </tr>
                    <tr>
                        <td>City of Stars</td>
                        <td>Ryan Gosling, Emma Stone</td>
                        <td>2:56</td>
                    </tr>
                    <tr>
                        <td>Rather Be</td>
                        <td>Clean Bandit</td>
                        <td>4:18</td>
                    </tr>
                    </tbody>
                </Table> 
            </div>
        );
    }
}

export default Playlist;