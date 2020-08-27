import axios from "axios";

const KEY = "AIzaSyCVKkNoUHrxVrYsIUPe08I1Kdkl-uJkn7k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
