import { StyledWhiteAnchor, StyledGrayAnchor } from "./ColorAnchor.styles";

const Anchor = (Component, props) => {
  const { href, children, ...rest } = props;

  return (
    <Component {...rest} href={href} target="_blank">
      {children}
    </Component>
  );
};

export const WhiteAnchor = (props) => {
  return Anchor(StyledWhiteAnchor, props);
};

export const GrayAnchor = (props) => {
  return Anchor(StyledGrayAnchor, props);
};
