import { string } from "prop-types";

import { PostCardImg } from "Assets/styles/Image";
import { GrayCard } from "Assets/styles/Card";
import { OpacityDiv } from "Assets/styles/Wrapper";
import { PostTitle, SmallGrayPara, BigParaEllipsis } from "Assets/styles/Para";
import { formatDate, getPostLink } from "Utils/helper";
import { StyledLink } from "Assets/styles/Link";

function PostCard({ title, text, image, timestamp }) {
  return (
    <StyledLink to={getPostLink(title)}>
      <OpacityDiv>
        <PostCardImg src="./Images/tmdb-clone.png" />
        <GrayCard>
          <PostTitle>{title}</PostTitle>
          <SmallGrayPara>{formatDate(timestamp)}</SmallGrayPara>
          <BigParaEllipsis>{text}</BigParaEllipsis>
        </GrayCard>
      </OpacityDiv>
    </StyledLink>
  );
}

PostCard.propTypes = {
  title: string,
  timestamp: string,
  text: string,
  image: string,
};

export default PostCard;
