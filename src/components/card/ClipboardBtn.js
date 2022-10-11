import ClipboardJS from "clipboard";

import { LinkBtn } from "Assets/styles/Button";

new ClipboardJS("#emailBtn");

export default function ClipboardBtn() {
  return (
    <LinkBtn id="emailBtn" data-clipboard-text="lopezaxel@protonmail.com">
      lopezaxel@protonmail.com
    </LinkBtn>
  );
}
