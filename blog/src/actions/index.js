import jsonplaceholder from "../api/jsonPlaceHolder";
import _ from "lodash";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonplaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: res.data });
  };
};

export const fetchUser = (id) => {
  return (dispatch, getState) => {
    // const res = await jsonplaceholder.get(`/users/${id}`);

    // dispatch({ type: "FETCH_USER", payload: res.data });

    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: res.data });
});
