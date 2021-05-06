import jsonplaceholder from "../api/jsonPlaceHolder";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonplaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: res });
  };
};
