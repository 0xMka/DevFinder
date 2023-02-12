import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export class GitHubAPI {
  static async fetchUsers(username) {
    const response = await axios.get(`${BASE_URL}${username}`);
    // console.log(response.data);
    return response.data;
  }
}
