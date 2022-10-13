import { format } from "date-fns";

function getNumArray(start, end) {
  let nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  return nums;
}

function formatDate(date) {
  return format(new Date(date), "PP");
}

function formatTitle(title) {
  return title.toLowerCase().replaceAll(" ", "-");
}

function getPostLink(title) {
  return `/blog/${formatTitle(title)}`;
}

function getApiUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  }
  return process.env.REACT_APP_API_ENDPOINT;
}

function getReqOptions(method = "GET") {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
}

export {
  getNumArray,
  formatDate,
  formatTitle,
  getPostLink,
  getApiUrl,
  getReqOptions,
};
