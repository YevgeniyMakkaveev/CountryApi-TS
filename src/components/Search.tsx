import React from "react";
import styled from "styled-components";

import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--ui-elem);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(0.5rem);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
 }
`;
const InputSearch = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
  autoFocus: true,
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--ui-elem);
`;

interface ISearch {
  search: string;
  setSearch: (search: string) => void;
}

const Search: React.FC<ISearch> = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch size="15px" />
      <InputSearch value={search} onChange={(e) => setSearch(e.target.value)} />
    </InputContainer>
  );
};
export default Search;
