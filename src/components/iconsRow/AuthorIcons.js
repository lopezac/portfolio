import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import { ListNoMargin } from "Assets/styles/List";
import { GrayAnchor } from "Assets/styles/Link";

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
    </ListNoMargin>
  );
}
