import { getApiUrl, getReqOptions } from "./helper";

export default function blogApi() {
  const apiUrl = getApiUrl();

  async function getPosts(page = 1) {
    try {
      const url = `${apiUrl}/posts?page=${page}`;
      const res = await fetch(url, getReqOptions());
      const data = await res.json();
      return data;
    } catch (err) {
      throw Error("Error getting posts, at api", err);
    }
  }

  async function getPost(id) {
    try {
      const url = `${apiUrl}/posts/${id}`;
      const res = await fetch(url, getReqOptions());
      const data = await res.json();
      return data;
    } catch (err) {
      throw Error("Error getting post, at api", id, err);
    }
  }

  async function getPostComments(id) {
    try {
      const url = `${apiUrl}/posts/${id}/comments`;
      const res = await fetch(url, getReqOptions("GET"));
      const data = await res.json();
      return data;
    } catch (err) {
      throw Error("Error getting post comments at api", id, err);
    }
  }

  return { getPosts, getPost, getPostComments };
}
