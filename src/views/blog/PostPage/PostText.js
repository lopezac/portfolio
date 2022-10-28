import hljs from "highlight.js";
import { string } from "prop-types";
import styled from "styled-components";
import { theme } from "Assets/styles/theme";

const StyledPostText = styled.div`
  a {
    color: ${theme.lightViolet};

    :hover,
    :active {
      color: ${theme.mediumViolet};
    }
  }

  p {
    line-height: 1.3rem;
  }
`;

function PostText({ text }) {
  hljs.highlightAll();

  return <StyledPostText dangerouslySetInnerHTML={{ __html: text }} />;
}

PostText.propTypes = {
  text: string,
};

export default PostText;
