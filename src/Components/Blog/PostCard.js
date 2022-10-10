import { string } from "prop-types";

import { PostCardImg } from "../../Assets/Styles/Image";
import { GrayCard } from "../../Assets/Styles/Card";
import { OpacityDiv } from "../../Assets/Styles/Wrapper";
import {
  PostTitle,
  SmallGrayPara,
  BigParaEllipsis,
} from "../../Assets/Styles/Para";
import { formatDate, getPostLink } from "../../Utils/helper";
import { AnchorLink } from "../../Assets/Styles/Link";

function PostCard({ title, text, image, timestamp }) {
  return (
    <AnchorLink href={getPostLink(title)}>
      <OpacityDiv>
        <PostCardImg src="./Images/tmdb-clone.png" />
        <GrayCard>
          <PostTitle>{title}</PostTitle>
          <SmallGrayPara>{formatDate(timestamp)}</SmallGrayPara>
          <BigParaEllipsis>{text}</BigParaEllipsis>
        </GrayCard>
      </OpacityDiv>
    </AnchorLink>
  );
}

PostCard.propTypes = {
  title: string,
  timestamp: string,
  text: string,
  image: string,
};

export default PostCard;
