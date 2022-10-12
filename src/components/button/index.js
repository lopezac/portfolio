import ClipboardJS from "clipboard";
import { StyledLink, A, StyledVioletBtn, StyledLinkBtn } from "./style";

new ClipboardJS("#emailBtn");

const handleLinkWrapping = (Component, props) => {
  const { href, to, children, ...rest } = props;
  const button = <Component {...rest}>{children}</Component>;

  if (href) return <A href={href}>{button}</A>;
  if (to) return <StyledLink to={to}>{button}</StyledLink>;
  return button;
};

export const VioletBtn = (props) => {
  return handleLinkWrapping(StyledVioletBtn, props);
};

export const LinkBtn = (props) => {
  return handleLinkWrapping(StyledLinkBtn, props);
};
