import { combineReducers } from "redux";

import postsReducer from "./postsReducer";

export default combineReducers({
  posts: postsReducer,
});

// Fake reducer. Randome key & Dummy function
