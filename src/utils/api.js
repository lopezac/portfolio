export default function blogApi() {
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  async function getPosts(page = 1) {
    try {
      const url = `${apiUrl}/posts?page=${page}`;
      const res = await fetch(url, options);
      const data = await res.json();
      return data;
    } catch (err) {
      throw Error("Error getting posts, at api", err);
    }
  }

  async function getPost(id) {
    try {
      const url = `${apiUrl}/posts/${id}`;
      const res = await fetch(url, options);
      const data = await res.json();
      return data;
    } catch (err) {
      throw Error("Error getting post, at api", id, err);
    }
  }

  async function getPostComments(id) {
    try {
      const url = `${apiUrl}/posts/${id}/comments`;
      const res = await fetch(url, options);
      const data = await res.json();
      return data;
    } catch (err) {
      throw Error("Error getting post comments at api", id, err);
    }
  }

  return { getPosts, getPost, getPostComments };
}
