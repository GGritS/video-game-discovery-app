import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e998eacf9f08444f8a566e4ec272d4d9",
  },
});
