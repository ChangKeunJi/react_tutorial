import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Bump n Grind", duration: "3:45" },
    { title: "Yeah", duration: "3:30" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer,
});
