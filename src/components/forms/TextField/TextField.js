import { StyledTextField } from "./TextField.style";

export default function TextField({ ...props }) {
  return <StyledTextField maxLength="500" type="text" {...props} />;
}
