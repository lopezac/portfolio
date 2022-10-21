import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import { ListNoMargin } from "Assets/styles/List";
import { GrayAnchor } from "Components/anchor";

export default function AuthorIcons() {
  return (
    <ListNoMargin>
      <li>
        <GrayAnchor
          href="mailto:lopezaxel@protonmail.com"
          aria-label="Author Mail"
        >
          <FiMail aria-label="Mail" />
        </GrayAnchor>
      </li>
      <li>
        <GrayAnchor
          href="https://github.com/lopezac"
          aria-label="Author GitHub"
        >
          <BsGithub aria-label="GitHub" />
        </GrayAnchor>
      </li>
      <li>
        <GrayAnchor
          href="https://www.linkedin.com/in/axel-lopez-a5988a252/"
          aria-label="Author LinkedIn"
        >
          <BsLinkedin aria-label="LinkedIn" />
        </GrayAnchor>
      </li>{" "}
      <li>
        <GrayAnchor
          href="https://stackoverflow.com/users/13614378/axel-lopez"
          aria-label="Author StackOverFlow"
        >
          <BsStackOverflow aria-label="BsStackOverflow" />
        </GrayAnchor>
      </li>
    </ListNoMargin>
  );
}
