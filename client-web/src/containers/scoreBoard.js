import React, { Component } from 'react';
import { connect } from 'react-redux';

// define the ScoreBoard Component
// change: use table, instead of ul
class ScoreBoard extends Component {
  renderScore() {
    return this.props.scores.sort((a, b) => a.score < b.score)
    .map(score => {
      var id = score.id.length > 10 ? score.id.substring(0, 8) + '...' : score.id;
      if ( score.id === this.props.username ) {
        return (
          <div key={score.id} id='playerScore' className='scoreItem'>
            <div className='scoreboard-score'>{score.score} </div>
            <div className='scoreboard-id'>{id}</div>
          </div>
        )
      } else {
        return (
          <div key={score.id} className='scoreItem'>
            <div className='scoreboard-score'>{score.score} </div>
            <div className='scoreboard-id'>{id}</div>
          </div>
        )
      }
    })
  }

  render() {
    return (
      <div id='scoreBoard'>
        <div>
          { this.renderScore() }
        </div>
      </div>
    )
  }
} // end of ScoreBoard Component definition

var mapStateToProps = (state) => {
  return {
    scores: state.scores,
    username: state.userInfo.username
  };
};

export default connect(mapStateToProps)(ScoreBoard);
