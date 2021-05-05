import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Hello", duration: "4:03" },
    { title: "Why not", duration: "4:33" },
    { title: "Get right", duration: "4:23" },
    { title: "Position", duration: "4:43" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
