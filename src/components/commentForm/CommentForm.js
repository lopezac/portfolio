import { useParams } from "react-router-dom";

import StyledCommentForm from "./CommentForm.style";
import { getApiUrl } from "Utils/helper";

export default function CommentForm() {
  const apiUrl = getApiUrl();
  const { postId } = useParams();

  return (
    <StyledCommentForm action={`${apiUrl}/comments`} method="post">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="text">Text</label>
      <input type="text" id="text" name="text" />
      <input type="hidden" name="post" value={postId} />
      <button type="submit">Submit</button>
    </StyledCommentForm>
  );
}
