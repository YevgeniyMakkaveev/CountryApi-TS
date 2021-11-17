import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import Container from "./Container";


const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--ui-elem);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-m);
  text-decoration: none;
  font-weight: var(--fw-fat);
`;

const ModeSwtcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-m);
  cursor: pointer;
  text-transform: capitalize;
`;

const Header: React.FC = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <HeaderEl />
      <Container>
        <Wrapper>
          <Title> Where is the world</Title>
          <ModeSwtcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoon size="15px" />
            ) : (
              <IoMoonOutline size="15px" />
            )}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwtcher>
        </Wrapper>
      </Container>
    </>
  );
};
export default Header;
