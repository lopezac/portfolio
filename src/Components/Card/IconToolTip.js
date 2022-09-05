import { string } from "prop-types";
import { useState } from "react";

import { IconImg } from "../../Assets/Styles/Image";
import { ToolTipCard } from "../../Assets/Styles/Card";
import { LiRelative } from "../../Assets/Styles/ListItem";

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
