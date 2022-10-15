import { useParams } from "react-router-dom";

import { FormRow, StyledCommentForm } from "./CommentForm.style";
import { FormBtn } from "Components/button";
import { TextField, TextArea } from "../index";
import blogApi from "Utils/api";
import { reloadPage } from "Utils/helper";

export default function CommentForm() {
  const api = blogApi();
  const { postId } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const text = e.target.elements.text.value;
    await api.submitComment(username, text, postId);
    reloadPage();
  }

  return (
    <>
      <iframe name="frame" id="frame" style={{ display: "none" }}></iframe>
      <StyledCommentForm
        action=""
        method="post"
        target="frame"
        onSubmit={handleSubmit}
      >
        <FormRow>
          <label htmlFor="username">Username</label>
          <TextField id="username" name="username" maxLength="50" />
        </FormRow>
        <FormRow>
          <label htmlFor="text">Text</label>
          <TextArea id="text" name="text" />
        </FormRow>
        <input type="hidden" name="post" value={postId} />
        <FormBtn type="submit">Submit</FormBtn>
      </StyledCommentForm>
    </>
  );
}
