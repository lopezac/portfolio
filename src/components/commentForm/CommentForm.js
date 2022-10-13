import StyledCommentForm from "./CommentForm.style";

export default function CommentForm() {
  return (
    <StyledCommentForm
      action={`${process.env.REACT_APP_API_ENDPOINT}/comments`}
      method="POST"
    >
      <label for="username">Username</label>
      <input type="text" id="username" />
      <label for="text">Text</label>
      <input type="text" id="text" />
      <button>Submit</button>
    </StyledCommentForm>
  );
}
