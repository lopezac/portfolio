import { useState } from "react";

import { ToolTipCard } from "../../Assets/Styles/Card";
import { RelativeDiv } from "../../Assets/Styles/Wrapper";
import ClipboardBtn from "../Projects/ClipboardBtn";

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
