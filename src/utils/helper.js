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
  return `/${formatTitle(title)}`;
}

function getApiUrl() {
  if (process.env.NODE_ENV === "development") {
    return process.env.REACT_APP_API_DEVELOPMENT;
  }
  return process.env.REACT_APP_API_PRODUCTION;
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

function getQuery(filter = "", sort = "-timestamp", page = 1) {
  let query;
  if (filter) {
    query = `${filter}&sort=${sort}&page=${page}`;
  } else {
    query = `sort=${sort}&page=${page}`;
  }
  return query;
}

function reloadPage() {
  window.location.reload();
}

export {
  getNumArray,
  formatDate,
  formatTitle,
  getPostLink,
  getApiUrl,
  getReqOptions,
  getQuery,
  reloadPage,
};
