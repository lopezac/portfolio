import { useState, useEffect } from "react";

import blogApi from "Utils/api";
import CommentForm from "Components/commentForm/CommentForm";

export default function NewComment() {
  return (
    <section>
      <h3>Write a new comment</h3>
      <CommentForm />
    </section>
  );
}
