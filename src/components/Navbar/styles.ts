import styled from "styled-components";

export const NavbarContainer = styled.nav`
  z-index: 9999;
  overflow-y: hidden;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 50px;
  width: 100vw;
  background: var(--background-black);

  a {
    text-decoration: none;
  }
`;

export const NavbarTitle = styled.h1`
  display: flex;
  align-items: center;
  color: #efefef;

  svg {
    margin-right: 0.5rem;
  }
`;
