import { StyledTextArea } from "./TextArea.style";

export default function TextArea({ ...props }) {
  return (
    <StyledTextArea
      minLength="3"
      maxLength="500"
      rows="7"
      cols="60"
      {...props}
    />
  );
}
