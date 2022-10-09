import { string } from "prop-types";

import { PostCardImg } from "../../Assets/Styles/Image";
import { FlexDivGap } from "../../Assets/Styles/Wrapper";
import {
  PostTitle,
  SmallGrayPara,
  BigParaEllipsis,
} from "../../Assets/Styles/Para";

function PostCard({ title, text, image, timestamp }) {
  return (
    <FlexDivGap>
      <PostCardImg src="./Images/tmdb-clone.png" />
      <div>
        <PostTitle>{title}</PostTitle>
        <SmallGrayPara>{timestamp}</SmallGrayPara>
        <BigParaEllipsis>{text}</BigParaEllipsis>
      </div>
    </FlexDivGap>
  );
}

PostCard.propTypes = {
  title: string,
  timestamp: string,
  text: string,
  image: string,
};

export default PostCard;
