import { getApiUrl, getReqOptions, getQuery } from "./helper";

export default function blogApi() {
  const apiUrl = getApiUrl();

  async function getPosts({ filter, sort, page }) {
    try {
      const query = getQuery(filter, sort, page);
      const url = `${apiUrl}/posts?${query}`;
      console.log("url", url);
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
      const res = await fetch(url, getReqOptions());
      const data = await res.json();
      return data;
    } catch (err) {
      throw Error("Error getting post comments at api", id, err);
    }
  }

  async function submitComment(username, text, post) {
    try {
      const url = `${apiUrl}/comments`;
      let options = {
        ...getReqOptions("POST"),
        body: JSON.stringify({ username, text, post }),
      };
      const res = await fetch(url, options);
      const data = await res.json();
      return data;
    } catch (err) {
      throw Error("Error submiting comment", err, username, text, post);
    }
  }

  return { getPosts, getPost, getPostComments, submitComment };
}
