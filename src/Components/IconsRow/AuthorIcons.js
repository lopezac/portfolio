import { BsGithub, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import { ListNoMargin } from "../../Assets/Styles/List";
import { GrayAnchor } from "../../Assets/Styles/Link";

export default function AuthorIcons() {
  return (
    <ListNoMargin>
      <li>
        <GrayAnchor href="#" aria-label="Author Mail">
          <FiMail aria-label="Mail" />
        </GrayAnchor>
      </li>
      <li>
        <GrayAnchor href="#" aria-label="Author Instagram">
          <BsInstagram aria-label="Instagram" />
        </GrayAnchor>
      </li>
      <li>
        <GrayAnchor href="#" aria-label="Author GitHub">
          <BsGithub aria-label="GitHub" />
        </GrayAnchor>
      </li>
    </ListNoMargin>
  );
}
