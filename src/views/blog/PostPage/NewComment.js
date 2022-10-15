import { CommentForm } from "Components/forms";
import { Heading } from "Assets/styles/Para";

export default function NewComment() {
  return (
    <section>
      <Heading>Write a new comment</Heading>
      <CommentForm />
    </section>
  );
}
