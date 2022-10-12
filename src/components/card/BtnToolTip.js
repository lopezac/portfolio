import { useState } from "react";

import { ToolTipCard } from "Assets/styles/Card";
import { RelativeDiv } from "Assets/styles/Wrapper";
import { LinkBtn } from "Components/button";

function BtnToolTip() {
  const [isHovered, setIsHovered] = useState(false);

  function handleHoverIn() {
    setIsHovered(true);
  }

  function handleHoverOut() {
    setIsHovered(false);
  }

  return (
    <RelativeDiv onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>
      <LinkBtn id="emailBtn" data-clipboard-text="lopezaxel@protonmail.com">
        lopezaxel@protonmail.com
      </LinkBtn>
      {isHovered && <ToolTipCard>Click to copy to clipboard</ToolTipCard>}
    </RelativeDiv>
  );
}

export default BtnToolTip;
