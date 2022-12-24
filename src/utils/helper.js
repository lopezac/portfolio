import { format } from "date-fns";

export const getNumArray = (start, end) => {
  let nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  return nums;
};

export const formatDate = (date) => {
  if (!date) return;
  return format(new Date(date), "PP");
};

export const formatTitle = (title) => {
  return title.toLowerCase().replaceAll(" ", "-");
};

export const getPostLink = (title) => {
  return `/${formatTitle(title)}`;
};

export const getApiUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.API_DEVELOPMENT;
  }
  return process.env.API_PRODUCTION;
};

export const getReqOptions = (method = "GET") => {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
};

export const getQuery = (filter = "", sort = "-timestamp", page = 1) => {
  let query;
  if (filter) {
    query = `${filter}&sort=${sort}&page=${page}`;
  } else {
    query = `sort=${sort}&page=${page}`;
  }
  return query;
};

export const reloadPage = () => {
  window.location.reload();
};
