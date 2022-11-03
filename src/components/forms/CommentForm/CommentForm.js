import { useParams } from "react-router-dom";

import blogApi from "Utils/api";
import { FormBtn } from "Components/button";
import { useSocket } from "Hooks";
import { FormRow, StyledCommentForm } from "./CommentForm.style";
import { TextField, TextArea } from "../index";

export default function CommentForm() {
  const { postId } = useParams();
  const api = blogApi();
  const socket = useSocket();

  async function handleSubmit(e) {
    e.preventDefault();
    let username = e.target.elements.username.value;
    if (!username.length) {
      username = "Anonymous";
    }
    const text = e.target.elements.text.value;
    const comment = await api.submitComment(username, text, postId);
    socket.emit("comment:create", comment);
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
          <TextArea id="text" name="text" minLength="3" required />
        </FormRow>
        <input type="hidden" name="post" value={postId} />
        <FormBtn type="submit">Submit</FormBtn>
      </StyledCommentForm>
    </>
  );
}
