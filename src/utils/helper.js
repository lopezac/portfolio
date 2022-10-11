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

export { getNumArray, formatDate, formatTitle, getPostLink };
