import axios from "axios";

const KEY = "AIzaSyCZtmY-k7XRxPljSGY_-nHvaoJoPhTx39c";
// Uppsercase for constant value.

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
