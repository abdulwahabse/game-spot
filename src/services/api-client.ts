import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "139847ec43c04a0eb056d9c62585a647",
  },
});