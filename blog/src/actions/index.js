import jsonplaceholder from "../api/jsonPlaceHolder";

export const fetchPosts = async () => {
  // dispatch is the same function in Redux

  return async function (dispatch, getState) {
    const res = await jsonplaceholder.get("/posts");

    return {
      type: "FETCH_POSTS",
      payload: res,
    };
  };
};
