import { string } from "prop-types";

import { ListCircle } from "Assets/styles/List";
import { formatDate } from "Utils/helper";
import { SmallGrayPara } from "Assets/styles/Para";
import { LightGrayCard } from "Assets/styles/Card";

function Comment({ username, timestamp, text }) {
  return (
    <LightGrayCard>
      <ListCircle>
        <li>{username}</li>
        <li>{formatDate(timestamp)}</li>
      </ListCircle>
      <SmallGrayPara>{text}</SmallGrayPara>
    </LightGrayCard>
  );
}

Comment.propTypes = {
  username: string,
  timestamp: string,
  text: string,
};

export default Comment;
