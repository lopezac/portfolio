import { StyledTextField } from "./TextField.style";

export default function TextField({ ...props }) {
  return (
    <StyledTextField
      required
      minLength="3"
      maxLength="500"
      type="text"
      {...props}
    />
  );
}
