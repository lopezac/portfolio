import { string } from "prop-types";
import parse from "html-react-parser";

import { PostCardImg } from "Assets/styles/Image";
import { GrayCard } from "Assets/styles/Card";
import { PostTitle, SmallGrayPara, BigParaEllipsis } from "Assets/styles/Para";
import { formatDate, getPostLink } from "Utils/helper";
import { StyledLink } from "Assets/styles/Link";
import OpacityDiv from "./OpacityDiv";

function PostCard({ title, text, image, timestamp }) {
  function parseText(text) {
    let parsedText = parse(text);
    if (typeof parsedText === "string") {
      return parsedText;
    } else if (parsedText.length) {
      for (let row of parsedText) {
        if (!["pre", "img", "span"].includes(row["type"])) {
          return row.props ? row.props.children : row;
        }
      }
    } else if (!["pre", "img", "span"].includes(parsedText["type"])) {
      return parsedText.props.children;
    }
  }

  return (
    <StyledLink to={getPostLink(title)}>
      <OpacityDiv>
        <PostCardImg src={image} />
        <GrayCard>
          <PostTitle>{title}</PostTitle>
          <SmallGrayPara>{formatDate(timestamp)}</SmallGrayPara>
          <BigParaEllipsis>{parseText(text)}</BigParaEllipsis>
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
