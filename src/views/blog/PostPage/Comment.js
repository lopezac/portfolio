import { string } from "prop-types";

import { ListCircle } from "../../../assets/styles/List";
import { formatDate } from "../../../utils/helper";
import { SmallGrayPara } from "../../../assets/styles/Para";
import { LightGrayCard } from "../../../assets/styles/Card";

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
