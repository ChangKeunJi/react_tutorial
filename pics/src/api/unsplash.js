import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID G6zeUaxFA8wIDGKfTy7wlLb1UglXHr7X3pFcotm9qw0",
  },
});
