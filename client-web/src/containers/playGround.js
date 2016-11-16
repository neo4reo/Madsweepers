import React, { Component } from 'react';
import { connect } from 'react-redux';

import { movePlayer, openSpace, dropFlag, createNewPlayer } from '../actions/index';
import { bindActionCreators } from 'redux';
import Player from '../components/player';

const playerId = Date.now().toString(36);

class PlayGround extends Component {
  componentWillMount() {
    console.log(this.props.username, this.props.roomName, 'username and roomname in playground component')
    this.props.createNewPlayer(this.props.username, this.props.roomName);
  }

  keyDown(e) {
    if ( e.key.slice(0, 5) === 'Arrow'  ) {
      this.props.movePlayer(this.props.username, e.key, this.props.playerLocation, this.props.board);
    }

    if ( e.key === ' ' ) {
      this.props.openSpace(this.props.username, this.props.playerLocation[this.props.username]);
    }

    if ( e.key === 'f' || e.key === 'F') {
      this.props.dropFlag(this.props.username, this.props.playerLocation[this.props.username]);
    }

  }

  renderPlayers() {
    console.log('props.playerLocation', this.props.playerLocation);
    var playersArr = Object.keys(this.props.playerLocation);

    return playersArr.map( (player) =>
      <Player
        key={player}
        username={this.props.username}
        playerLocation={this.props.playerLocation[player]} />
    );
  }

  render() {
    return (
      <div
        className='playGround'
        id='playGround'
        tabIndex='0'
        onKeyDown={ this.keyDown.bind(this) }>
          { this.renderPlayers() }
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    username: state.username,
    board: state.board,
    playerLocation: state.playerLocation,
    roomName: state.roomName
  }
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    movePlayer: movePlayer,
    openSpace: openSpace,
    dropFlag: dropFlag,
    createNewPlayer: createNewPlayer
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayGround);