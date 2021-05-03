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
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
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
    // { selectSong:func(), songs: [..]}

    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Re-run everytime state has changed.
const mapStateToProps = (state) => {
  //  Returned value will be passed to props of Component

  //   console.log(state);

  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
  // Becomes props of Component
  // Returned value passed to store.dispatch()
})(SongList);
