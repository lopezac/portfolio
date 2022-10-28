import { useLocation } from "react-router-dom";

export default function useQueryParams() {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const queryParams = {};
  query.forEach((value, param) => {
    queryParams[param] = value;
  });
  return queryParams;
}
