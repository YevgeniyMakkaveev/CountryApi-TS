import styled from "styled-components";
import Select from "react-select";

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--ui-elem)",
      color: "var(--colors-text)",
      borderRadius: "var(0.5rem)",
      padding: "0.25rem",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: state.isSelected ? "var(--bg-color)" : "var(--ui-elem)",
    }),
  },
})`
  width: 200px;
  border-radius: var(0.5rem);
  font-family: var(--family);
  border: none;
  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  & * {
    color: var(--colors-text) !important;
  }
  & > div[id] {
    background-color: var(--ui-elem);
  }
`;
export default CustomSelect;
