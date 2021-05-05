import { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    // this.props ===  {songs:state.songs}
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Grab the state and Pass to props
const mapStateToProps = (state) => {
  // console.log(state);
  // => {songs: .. , selectedSong: ..}

  return {
    songs: state.songs,
  };
  // Returned value becomes props of component
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
  // Action creator is passed as props
})(SongList);

// "connect" is a React Component
// If State has changed, Provider lets Connect know automatically

// Action creator should be in connect.
// So returned value from action creator can be dispatched
