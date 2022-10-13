import { string } from "prop-types";

import { formatDate } from "Utils/helper";
import { ListCircle } from "../../../assets/styles/List";

function PostInfo({ timestamp, keyword }) {
  if (!timestamp) return;
  return (
    <div>
      <ListCircle>
        <li>{formatDate(timestamp)}</li>
        <li>{keyword}</li>
      </ListCircle>
    </div>
  );
}

PostInfo.propTypes = {
  timestamp: string,
  keyword: string,
};

export default PostInfo;
