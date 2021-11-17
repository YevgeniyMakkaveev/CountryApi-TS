import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, auto);
  gap: 2rem;
  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 2.5rem 0;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`;

const List: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default List;
