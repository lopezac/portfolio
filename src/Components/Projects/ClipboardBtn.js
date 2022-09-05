import ClipboardJS from "clipboard";

import { LinkBtn } from "../../Assets/Styles/Button";

new ClipboardJS("#emailBtn");

export default function ClipboardBtn() {
  return (
    <LinkBtn id="emailBtn" data-clipboard-text="lopezaxel@protonmail.com">
      lopezaxel@protonmail.com
    </LinkBtn>
  );
}
