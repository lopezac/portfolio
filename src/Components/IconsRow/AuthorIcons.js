import { BsGithub, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import { FlexList } from "../../Assets/Styles/List";
import { WhiteAnchor } from "../../Assets/Styles/Link";

export default function AuthorIcons() {
  return (
    <FlexList>
      <li>
        <WhiteAnchor href="#">
          <FiMail />
        </WhiteAnchor>
      </li>
      <li>
        <WhiteAnchor href="#">
          <BsInstagram />
        </WhiteAnchor>
      </li>
      <li>
        <WhiteAnchor href="#">
          <BsGithub />
        </WhiteAnchor>
      </li>
    </FlexList>
  );
}
