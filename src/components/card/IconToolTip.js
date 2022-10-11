import { string } from "prop-types";
import { useState } from "react";

import { IconImg } from "Assets/styles/Image";
import { ToolTipCard } from "Assets/styles/Card";
import { LiRelative } from "Assets/styles/ListItem";

function IconToolTip({ img, text }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleHoverIn() {
    setIsHovered(true);
  }

  function handleHoverOut() {
    setIsHovered(false);
  }

  return (
    <LiRelative onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>
      <IconImg src={img} alt={text} />
      {isHovered && <ToolTipCard>{text}</ToolTipCard>}
    </LiRelative>
  );
}

IconToolTip.propTypes = {
  img: string,
  text: string,
};

export default IconToolTip;
