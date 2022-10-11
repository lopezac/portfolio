import { useState } from "react";

import { ToolTipCard } from "Assets/styles/Card";
import { RelativeDiv } from "Assets/styles/Wrapper";
import ClipboardBtn from "./ClipboardBtn";

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
      <ClipboardBtn />
      {isHovered && <ToolTipCard>Click to copy to clipboard</ToolTipCard>}
    </RelativeDiv>
  );
}

export default BtnToolTip;
