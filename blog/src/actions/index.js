import jsonplaceholder from "../api/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // fetchPosts returns A function.
    // To invoke that function, should dispatch it again.

    const userIds = _.uniq(_.map(getState().posts, "userId"));
    // Grab the property called 'userId',
    userIds.forEach((id) => dispatch(fetchUser(id)));
    // We don't need async/await, since we don't need to wait
    // Cant' use async/await with forEach

    //! Lodash chaining method.
    // _.chain(getState().posts)
    //   .map("userId")
    //   .uniq()
    //   .forEach((id) => dispatch(fetchUser(id)))
    //   .value();
  };
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonplaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: res.data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    const res = await jsonplaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: res.data });

    // _fetchUser(id, dispatch);
  };
};

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonplaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: res.data });
// });
