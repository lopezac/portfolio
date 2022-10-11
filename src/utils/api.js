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
      throw Error("Error getting posts, at api");
    }
  }

  return { getPosts };
}
