import { BsGithub, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import { ListNoMargin } from "../../Assets/Styles/List";
import { WhiteAnchor } from "../../Assets/Styles/Link";

export default function AuthorIcons() {
  return (
    <ListNoMargin>
      <li>
        <WhiteAnchor href="#" aria-label="Author Mail">
          <FiMail aria-label="Mail" />
        </WhiteAnchor>
      </li>
      <li>
        <WhiteAnchor href="#" aria-label="Author Instagram">
          <BsInstagram aria-label="Instagram" />
        </WhiteAnchor>
      </li>
      <li>
        <WhiteAnchor href="#" aria-label="Author GitHub">
          <BsGithub aria-label="GitHub" />
        </WhiteAnchor>
      </li>
    </ListNoMargin>
  );
}
