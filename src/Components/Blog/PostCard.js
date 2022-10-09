import { string } from "prop-types";

function PostCard({ title, timestamp }) {
  return (
    <article>
      <ul>
        <li>
          <a href={`/posts/${title}`}>{title}</a>
        </li>
        <li>{timestamp}</li>
      </ul>
    </article>
  );
}

PostCard.propTypes = {
  title: string,
  timestamp: string,
};

export default PostCard;
