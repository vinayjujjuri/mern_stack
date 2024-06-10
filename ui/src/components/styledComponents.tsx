import styled from "@emotion/styled"
import { Input, TextField } from "@mui/material"

export const CustomTextFeild = styled(TextField)`

.MuiFormControl-root {
    background-color: #fff9e4;
  }
  & input {
    overflow: unset;
    // padding: 14px 16px;
    border-radius: 8px;
    background: #fff9e4;
    min-width: 0 !important;
    &::placeholder {
      color: #686868; // Example placeholder text color
      opacity: 0.5; // Adjust the opacity as needed
    }
  }
  & input:-webkit-autofill {
    /* Styles for autofill */
    border-radius: 8px;
    box-shadow: 0 0 0 30px #fff9e4 inset !important;
  }
  & fieldset {
    border-style: unset;
  }
  & svg {
    background-color: #fff9e4;
  }
`;